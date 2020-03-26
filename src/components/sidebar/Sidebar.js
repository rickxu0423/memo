import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function () {
    const sidebarList = ['Schedule', 'To-buy', 'Cook-book'];
    const [select, setSelect] = useState(-1);


    const handleClick = index => {
        setSelect(index);
    }

    return (
        <div className='sidebar-container'>
            {sidebarList.map( (item, index) =>
                <Link key={item} to={item.toLowerCase()} 
                className='sidebar-item' id={select===index ? 'selected' : null} 
                onClick={handleClick.bind(null, index)}>
                    {item}
                </Link>
            )}
        </div>
    )
}