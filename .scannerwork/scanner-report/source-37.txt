import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
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

// import React from "react";
// import RoomsList from "./RoomsList";
// import RoomsFilter from "./RoomsFilter";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { rooms, sortedRooms, loading } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
