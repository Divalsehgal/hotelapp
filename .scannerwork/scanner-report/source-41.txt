import React from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room" data-test="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={{pathname:`/rooms/${slug}`,state:{slug}}} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
