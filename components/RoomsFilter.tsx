import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value): any => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }: any) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    minSize,
    maxSize,
    price,
    minPrice,
    maxPrice,
    breakfast,
    pets,
    size,
  } = context;
  let types = getUnique(rooms, "type");
  let people = getUnique(rooms, "capacity");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  const handleChangeActivity = (e) => {
    handleChange(e);
  };

  return (
    <section className="filter-container" data-test="roomsfilter">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChangeActivity}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChangeActivity}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price" className="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChangeActivity}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="size" htmlFor="size">room size {size} sqft</label>
          <input
            type="range"
            name="size"
            min={minSize}
            max={maxSize}
            id="size"
            value={size}
            onChange={handleChangeActivity}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChangeActivity}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChangeActivity}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
