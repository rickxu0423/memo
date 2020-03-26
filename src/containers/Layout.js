import React, { useState } from 'react';
import './Layout.css';
import Header from '../components/header/Hearder.js';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/content/Content';

export default function(props) {
    //console.log(props.children)

    const [showSidebar, setShowSidebar] = useState(true);

    const handleSidebar = () => {
        setShowSidebar(showSidebar=>!showSidebar)
    }

    return(
        <div className='layout-container'>
            <Header fn={handleSidebar} />
            <div className='body-container'>
                {showSidebar && <Sidebar />}
                <div className='view-container'>
                    {props.children}
                </div>
            </div>  
        </div>
    )
}