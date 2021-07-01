import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../../Actions/index";
import DisplayDiets from "../../Shared/Displaydiets/DisplayDiets";
import "./Form.css";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    rating: "",
    resume: "",
    healthy: "",
    steps: "",
  });
  const [diet, setDiets] = useState({
    diets: [],
  });
  const alldiets = useSelector((state) => state.diets);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleChange2(e) {
    if (diet.diets.indexOf(e.target.value) === -1) {
      setDiets({
        ...diet,
        diets: diet.diets.concat(e.target.value),
      });
    }
  }
  async function handleSubmit() {
    var todo = {};
    await axios({
      method: "post",
      url: "http://localhost:3001/recipe",
      data: (todo = {
        ...state,
        ...diet,
      }),
    });
  }
  return (
    <div className="backgroundform">
      <form className="recipeform" onSubmit={handleSubmit}>
        <div className="back"></div>
        <p className="recipes">CREATE YOUR RECIPES</p>
        <p className="recipes2">AND</p>
        <p className="recipes3">POST THEM ALL</p>
        <div>
        <input
          required
          name="name"
          className="name"
          placeholder="name"
          onChange={handleChange}
          type="text"
        />
        </div>
        <div>
        <label className="label2">{state.rating} Score</label>
        <input
          type="range"
          min="0"
          max="100"
          name="rating"
          className="score"
          onChange={handleChange}
        />
        </div>
        <label className="label">{state.healthy} Health score</label>
        <input
          name="healthy"
          className="healthy"
          type="range"
          min="0"
          max="100"
          onChange={handleChange}
        />
        <textarea
          name="steps"
          placeholder="all the steps"
          className="steps"
          onChange={handleChange}
          type="text"
        />
        <textarea
          required
          name="resume"
          className="resume"
          rows="50"
          cols="40"
          placeholder="Recipe desciption"
          onChange={handleChange}
        />
        <select
          required
          className="select"
          placeholder="type of diet"
          multiple
          name="diets"
          onChange={handleChange2}
        >
          {alldiets.map((diet) => {
            return <option>{diet.name}</option>;
          })}
        </select>
        <div className="submit">
          <button className="btn-2">Post recipes</button>
        </div>
      </form>
      <div className="back"></div>
      <div>
        <DisplayDiets array={diet.diets}></DisplayDiets>
      </div>
    </div>
  );
};
