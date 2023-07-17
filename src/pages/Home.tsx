import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";
import config from "../config/keys"
const Home = () => {
  const stage = config.REACT_APP_STAGE;

  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at Rs.1500"
        >
          <Link to="/room" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero> 
      <Service />
      <FeaturedRooms />
    </>
  );
};
export default Home;

