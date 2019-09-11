import React from 'react';
import Player from "./Player";
import { Consumer } from './Context';

const PlayerList = () => {
  return (
    <Consumer>
      {({ actions, players }) => (
        <React.Fragment>
          {players.map((player, index) =>
            <Player
              key={player.id.toString()}
              index={index}
              isHighScore={actions.highScore === player.score}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;