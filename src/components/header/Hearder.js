import React from 'react';
import './Header.css';

export default function (props) {

    return (
        <div className='header-container'>
            <button onClick={()=>props.fn()}>-</button>
            <div className='title'>Memo</div>
        </div>
    )
}