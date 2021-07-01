import React from 'react';
import { useDispatch } from 'react-redux';
import { getDetails } from '../../../Actions/index';
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  let dispatch = useDispatch();
  function handleClick() {
    dispatch(getDetails(props.id));
  }
  return (
    <div className="card">
      <div className="band"></div>
      <Link className="title" to="detail">
        <p onClick={handleClick}>{props.title}</p>
      </Link>
      <img
        className="img"
        src={
          props.img ||
          "https://images.pexels.com/photos/6287225/pexels-photo-6287225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        alt=""
      />
      <p className="dietss">{props.diets}</p>
      <p className=''>{props.pricePerServing}</p>
    </div>
  );
}

export default Card;
