import React from 'react';

function articleImage(props) {
    return (
        <div className='articleImage'>
            <img src={props.imgURL} alt={props.altImage} />
            <p className='credits'><a href='https://picsum.photos/'>{props.credits}</a></p>
        </div>
    );
}

export default articleImage;