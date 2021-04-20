import React from 'react';

const ServiceHeader = (props) => {
   const {image, text, className} = props;
   return (
      <header style={{backgroundImage: `linear-gradient(90deg, rgba(21, 29,48, 0.8) 0%, rgba(21, 29,48, 0.8) 100%),  url("/img/${image}")`}} className={`ServiceHeader d-flex align-items-center justify-content-center ${className ? className : ''}`}>
         <h1 className="mb-0">{text}</h1>
      </header>
   );
};

export default ServiceHeader;