'use client'
import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

interface RoomsContainerProps {
  context: context;
}
interface context {
  loading: Boolean;
  sortedRooms: any;
  rooms:any;
}

function RoomsContainer({ context }: RoomsContainerProps) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {" "}
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);
