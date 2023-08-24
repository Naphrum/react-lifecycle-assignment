import React, { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Tiramisu from "./components/Tiramisu";



function App() {
  const [isPlaying, setIsPlaying] = useState(false)

function checkIfPlaying() {
  if(isPlaying === false){
    return <StartGame handleClick={startGame} />
  }
  return <Tiramisu handleClick={endGame}/>
}

function startGame() {
  setIsPlaying(true)
}

function endGame() {
  setIsPlaying(false)
}

  return (
    <div className="App">
      <h1>Tiramisu Tapper</h1>
      {checkIfPlaying()}
    </div>
  );
}

export default App;
