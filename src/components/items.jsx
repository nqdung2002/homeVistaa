import { React, useEffect, useState } from "react";
import "./items.css";
import { Link } from "react-router-dom";
import { Heart } from "@phosphor-icons/react";

export const Items = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getAllHouses", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div className="row-grid">
      {data.map((i) => {
        const img = require(`../assets/images/${i.slug}.jpg`);
        return (
          <Link className="cover-image" to={`/find/${i.slug}`}>
            <img src={img} alt="" />
            <span className="dark-overlay"></span>
            <button id="heart">
              <Heart />
            </button>
            <div className="info-container">
              <h3 className="proj-name">{i.name}</h3>
              <div className="proj-address">{i.address}</div>
              <div className="proj-price">{i.price}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
