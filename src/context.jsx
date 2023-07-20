import React, { useEffect, useState } from "react";
import items from "./data";
//import Client from "./Contentful";
// interface context {
//   loading: Boolean;
//   sortedRooms: any;
//   rooms:any;
// }
const RoomContext = React.createContext();

const RoomProvider = (props) => {
  const [roomState, setRoomState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    size: 0,
    pets: false,
  });

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const minPrice = Math.min(...rooms.map((item) => item.price));

    const maxSize = Math.max(...rooms.map((item) => item.size));

    const minSize = Math.min(...rooms.map((item) => item.size));
    setRoomState((prevRoomState) => {
      return {
        ...prevRoomState,
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        maxPrice,
        maxSize,
        minSize,
        minPrice,
      };
    });
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };
  const getRoom = (slug) => {
    let tempRooms = [...roomState.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  const filterRooms = (name, value) => {
    const { rooms } = roomState;
    let tempRooms = [...rooms];

    // filter by type
    if (name === "type" && value !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === value);
    }
    //filter by capacity
    if (name === "capacity" && name !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= value);
    }
    // // filter by price
    if (name === "price") {
      tempRooms = tempRooms.filter((room) => room.price <= value);
    }
    // //filter by size
    if (name === "size") {
      tempRooms = tempRooms.filter((room) => room.size <= value);
    }

    // //filter by breakfast
    if (name === "breakfast") {
      tempRooms = tempRooms.filter((room) => room.breakfast === value);
    }
    // //filter by pets
    if (name === "pets") {
      tempRooms = tempRooms.filter((room) => room.pets === value);
    }
    setRoomState((prevRoomState) => {
      return {
        ...prevRoomState,
        sortedRooms: tempRooms,
        [name]: value,
      };
    });
  };
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    filterRooms(name, value);
  };

  return (
    <RoomContext.Provider
      value={{
        ...roomState,
        getRoom: getRoom,
        handleChange: handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
