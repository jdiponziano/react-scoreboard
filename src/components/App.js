import React, { Component } from "react";
import { Provider } from "./Context";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        highscore: false
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        highscore: false
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        highscore: false
      },
      {
        name: "James",
        score: 0,
        id: 4,
        highscore: false
      }
    ]
  };

  prevPlayerID = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerID += 1),
            highscore: false
          }
        ]
      };
    });
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider>
        <div className="scoreboard">
          <Header title="Scoreboard" players={this.state.players} />

          {/* Players list */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              id={player.id}
              index={index}
              score={player.score}
              key={player.id.toString()}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
              isHighScore={highScore === player.score}
            />
          ))}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
