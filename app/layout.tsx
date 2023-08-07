import NavBar from "../components/Navbar";
import "../App.css";
import { RoomProvider } from "../context";
export const metadata = {
  title: "hotel-booking",
  Description: "collection AI prompts",
};
const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <NavBar />
          <RoomProvider>{children}</RoomProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
