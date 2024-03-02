import React from "react";

const SalesCard = ({ name, description, price, imgUrl }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  );
};

export default SalesCard;
