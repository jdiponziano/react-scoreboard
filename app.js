const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Jess</span>
    </div>
  );
};

ReactDOM.render(<Player />, document.getElementById("root"));
