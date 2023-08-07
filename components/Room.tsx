'use client'
import React from "react";
import defaultImg from "../public/images/room-1.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Room({ room }:RoomProps) {
  const { name, slug, images, price } = room;
  return (
    <article className="room" data-test="room">
      <div className="img-container">
        <Image src={images[0] || defaultImg} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link href={{pathname:`/rooms/${slug}`}} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
