import React from 'react';
import Player from "./Player";
import { Consumer } from './Context';

const PlayerList = (props) => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          {context.players.map((player, index) =>
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              isHighScore={props.highScore === player.score}
              removePlayer={props.removePlayer}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;