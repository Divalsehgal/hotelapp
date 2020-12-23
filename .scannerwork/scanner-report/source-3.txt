import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import { RoomContext } from "../context";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(this.state.slug, room);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room can be found...</h3>
          <Link to="/room" className="btn-primary">
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
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaulImg.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
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
                {breakfast
                  ? "Free Breakfast included"
                  : "Breakfast not included"}
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
  }
}
