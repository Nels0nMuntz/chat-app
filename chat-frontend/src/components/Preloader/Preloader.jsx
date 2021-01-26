import React from 'react'

import './Preloader.scss'


const Preloader = () => {
    return (
        <div className="preloader-wrapper">
            <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
};

export default Preloader;
