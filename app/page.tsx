import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Link from "next/link";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";
function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at Rs.1500"
        >
          <Link href="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </>
  );
}

export default Home;
