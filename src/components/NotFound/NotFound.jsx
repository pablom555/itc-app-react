import React from 'react';
import './NotFound.css';
import NotFoundImg from './404.png';

const NotFound = () => (

    <div className="NotFound_Cont">
        <h1 className="NotFound_Text">Error: 404 Page Not Found</h1>
        <img src={NotFoundImg} alt="404 NotFound" className="NotFound_Image" />
    </div>
)

export default NotFound;