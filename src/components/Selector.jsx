import React from 'react';
import Select from './Select';

function Selector() {
    return (
        <div className='selectorImg'>
            <Select imgUrl='https://i.picsum.photos/id/10/2500/1667.jpg'/>
            <Select imgUrl='https://i.picsum.photos/id/100/2500/1656.jpg'/>
            <Select imgUrl='https://i.picsum.photos/id/1015/6000/4000.jpg'/>
        </div>
    )
}

export default Selector;