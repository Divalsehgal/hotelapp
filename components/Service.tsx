'use client'

import React from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";
const services = [
  {
    icon: <FaCocktail />,
    title: "Free cocktails",
    info: "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free shuttle",
    info: "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaBeer />,
    title: "Free Beer",
    info: "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaHiking />,
    title: "Free Hiking service",
    info: "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Service = () => {
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services?.map((data, index) => {
          return (
            <article key={index} className="service">
              <span>{data.icon}</span>
              <h6>{data.title}</h6>
              <p>{data.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
