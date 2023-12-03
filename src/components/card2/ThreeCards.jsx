import React from 'react';
import './threeCards.css'; 

const ThreeCards = ({ image, title,title2, description }) => {
  console.log(image)
  return (
    <>
       <div className="threecard">
          <img src={image} alt="Card" className="card-image" />
           <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <h2 className="card-title">{title2}</h2>
            <p className="card-description">{description}</p>
          </div>
        </div>  
    </>
  );
};

export default ThreeCards;

