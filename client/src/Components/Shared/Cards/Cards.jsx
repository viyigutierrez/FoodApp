import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { searchByName, getDiets } from "../../../Actions/index";
import filter from "../../../Ord-Fil/Filter";
import order from "../../../Ord-Fil/Order";
import "./Cards.css";

export default function Cards() {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState([]);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);

  let dispatch = useDispatch();
  const alldiets = useSelector((state) => state.diets);
  const searched = useSelector((state) => state.searched);
  let searched1 = filtered?.length > 0 ? filtered : searched;
  const [max, setMax] = useState(searched1.length - 9);

  useEffect(() => {
    dispatch(searchByName());
    dispatch(getDiets());
  }, []);

  const nextPage = () => {
    page < max && setPage(page + 9);
  };
  const prevPage = () => {
    page > 0 && setPage(page - 9);
  };
  useEffect(() => {
    setMax(searched1.length - 9);
    setPage(0);
  }, [searched1]);

  useEffect(() => {
    setFiltered(order(searched1, orders));
  }, [orders]);

  useEffect(() => {
    setFiltered(filter(searched, filters));
    setPage(0);
  }, [filters]);

  function handleOrder(e) {
    setOrders(e.target.value);
  }
  function handleFilter(e) {
    e.preventDefault();
    setFilters(filters.concat(e.target.value));
  }
  function handleReset(e) {
    setFilters([]);
    dispatch(searchByName());
  }
  return (
    
    <div>
      <div className="orders">
        <select onChange={handleOrder} className="options">
          <option value="">ORIGINAL</option>
          <option value="AZ">AZ</option>
          <option value="ZA">ZA</option>
          <option value="SCOREUP">SCOREUP+</option>
          <option value="SCOREDN">SCOREDN-</option>
        </select>
        <select onChange={handleFilter} className="options1">
          {alldiets.map((diet) => {
            return <option>{diet.name}</option>;
          })}
        </select>
        <button onClick={handleReset} className="btn-2">
          Reset
        </button>
      </div>
      <div className="flex">
        {searched1.slice(page, page + 9).map((food) => (
          <Card
            title={food?.name}
            img={food?.img}
            id={food?.id}
            pricePerServing={food?.pricePerServing}
            score={food?.score}
            diets={food?.diets}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage}>{"<--"}</button>
        <button onClick={nextPage}>{"-->"}</button>
      </div>
    </div>
  );
}
