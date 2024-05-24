import React from "react";
import "../components/GameOver.css";
const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>Gamer Over</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default GameOver;
