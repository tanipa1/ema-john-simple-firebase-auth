import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" name="" id="" value="Login" />
            </form>
            <p className='extended'><small>New to Ema-john? </small><Link className='link' to="/signup"> Create New Account</Link></p>
        </div>
    );
};

export default Login;