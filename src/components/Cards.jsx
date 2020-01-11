import React from 'react';

function Card(props) {
    return (
        <div className='card'>
            <div className='top'>
                <span className='user'>{props.user}</span>
                <img src={props.imgURL} alt={props.user}/>
            </div>
            <div className='bottom'>
                <p className='email'>{props.email}</p>
                <p className='tel'>{props.phone}</p>
            </div>
        </div>
    );
}

export default Card;