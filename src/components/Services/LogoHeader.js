import React from 'react';

const LogoHeader = (props) => {
    const {image, text, className} = props;
    return (
        <header style={{backgroundImage: ` url("/img/${image}")`}} className={`ServiceHeader d-flex align-items-center justify-content-center ${className ? className : ''}`}>
            <h1 className="mb-0"  >{text}</h1>
        </header>
    );
};

export default LogoHeader;