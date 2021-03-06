import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

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
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer,
          highScore: this.getHighScore()
        }
      }}>
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
};
export const Consumer = ScoreboardContext.Consumer;
