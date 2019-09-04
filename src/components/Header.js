import React from "react";
import { Consumer } from "./Context";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = () => {
  return (
    <Consumer>
      {context => {
        return (
          <header>
            <Stats />
            <h1>Scoreboard</h1>
            <Stopwatch />
          </header>
        );
      }}
    </Consumer>
  );

};

export default Header;
