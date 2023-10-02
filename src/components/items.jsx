import { React } from "react";
import "./items.css";
import { Link } from "react-router-dom";

export const Items = (props) => {
  const img = require(`../assets/images/${props.slug}.jpg`);

  return (
    <div className="item-main">
      <Link className="cover-image" to={`/find/${props.slug}`}>
        <img src={img} alt="" />
        <span className="dark-overlay"></span>
        {/* <button id="heart">
          <Heart />
        </button> */}
        <div className="info-container">
          <h3 className="proj-name">{props.name}</h3>
          <div className="proj-address">{props.address}</div>
          <div className="proj-price">{props.price}</div>
        </div>
      </Link>
    </div>
  );
};
