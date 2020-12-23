import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";

import Error from "./pages/Error";
import NavBar from "./components/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route component={Error} />

      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
