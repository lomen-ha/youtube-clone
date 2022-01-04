import React from 'react';

const Card = (props) => {
  return (
    <>
      <li className="video-card">
        <div className="video-card-image">
          <img src="images/sample.jpg" alt="sample" />
        </div>
        <div className="video-card-desc">
          <p className="desc-title">Sample</p>
          <p>Test</p>
        </div>
      </li>
      <li className="video-card">
        <div className="video-card-image">
          <img src="images/sample.jpg" alt="sample" />
        </div>
        <div className="video-card-desc">
          <p className="desc-title">Sample</p>
          <p>Test</p>
        </div>
      </li>
    </>
  );
};

export default Card;
