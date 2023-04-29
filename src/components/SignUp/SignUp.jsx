import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be atleast 6 charaters')
        }
    }
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label className='label' htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" name="" id="" value="Sign Up" />
            </form>
            <p className='extended'><small>Already have an account? </small><Link className='link' to="/signup"> Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
        </div>
    );
};

export default SignUp;