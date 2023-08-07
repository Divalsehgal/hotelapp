"use client";

import React, { useContext } from "react";
import defaultBcg from "../../../public/images/defaultBcg.jpeg";
import { RoomContext } from "../../../context";
import Banner from "../../../components/Banner";
import StyledHero from "../../../components/StyledHero";
import Image from "next/image";
import Link from "next/link";


const SingleRoom = (props) => {
  const {getRoom} = useContext(RoomContext);
  const room = getRoom(props?.params?.slug);
  if (!room) {
    return (
      <div className="error">
        <h3>No such room can be found...</h3>
        <Link href="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    images,
    capacity,
    price,
    size,
    extras,
    breakfast,
    pets,
  } = room;
  const [mainImg, ...defaulImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link href="/" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaulImg.map((image, index) => {
            return <Image key={index} src={image} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article>
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: ${size} SQFT</h6>
            <h6>
              Max capacity:
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets alowed" : "no pets allowed"}</h6>
            <h6>
              {breakfast ? "Free Breakfast included" : "Breakfast not included"}
            </h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
