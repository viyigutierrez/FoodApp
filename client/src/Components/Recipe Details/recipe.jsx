import React from "react";
import { useSelector } from "react-redux";
import "./recipe.css";

export default function Detail() {
  const detail = useSelector((state) => state.detail);

  return (
    <div className="text">
      <div className="alll">
        <div className="bg"></div>
        <img
          className="image"
          src={
            detail[0]?.img
              ? detail[0].img
              : "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          }
          alt=""
        />
        <p className="details">Recipe details</p>
        <p className="name2">{detail[0]?.name}</p>
        <p className="diets2">Diets: {detail[0]?.diets}</p>
        <p className="dishTypes2">Dishtype: {detail[0]?.dishTypes}</p>
        <p className="healthy2">Health score: {detail[0]?.healthy}</p>
        <p className="score2">Score: {detail[0]?.score}</p>
      </div>
      <div>
      <p className="summary">
        {detail[0]?.summary?.replace(/(<([^>]+)>)/gi, "")}
      </p>
      <p className="instructions">
        {detail[0]?.instructions?.replace(/(<([^>]+)>)/gi, "")}
      </p>
      </div>
    </div>
  );
}
