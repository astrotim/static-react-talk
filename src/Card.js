import React from 'react';
import './Card.css';

const Cards = props => <div className="cards">{props.children}</div>;

const Card = props => (
  <div className="card">
    <img src={props.src} alt="" />
    <h2>{props.title}</h2>
  </div>
);

export { Card, Cards };
