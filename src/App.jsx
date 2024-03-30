import { useState } from "react";
import Nav from "./components/Nav";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      <Nav />
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
