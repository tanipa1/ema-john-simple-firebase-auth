import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    
    const { id, img, price, name, quantity } = product;
    return (
        <div className="review-item">
            <div className='item'>
                <img src={img} alt="" />

                <div className='item-details'>
                    <h6>{name}</h6>
                    <p>Price: <span className='orange-text'>${price}</span></p>
                    <p>Quantity: <span className='orange-text'>{quantity}</span></p>
                </div>
                <button onClick={()=> handleRemoveFromCart(id)} className='remove-btn'><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#eb5757" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM7 6v13h10V6H7Zm2 10q0 .425.288.713T10 17q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7Zm4 0q0 .425.288.713T14 17q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7ZM7 6v13V6Z" /></svg></button>

            </div>
        </div>
    );
};

export default ReviewItem;