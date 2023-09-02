import React from "react";
import "../CardList/card.css"
const CardList = ({ user }) => {
  return (
    <div className="card-list">
      <div className="card-container">
        <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardList;
