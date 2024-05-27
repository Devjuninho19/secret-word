//CSS
import "./App.css";
// React
import { useCallback, useEffect, useState } from "react";
import React from "react";
//data
import { WordsList } from "./data/Word";
//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(WordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [latters, setLatters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([guessedLetters]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);
    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category };
  };
  //Starts the secret word game
  const startGame = () => {
    // pic word and category
    const { word, category } = pickWordAndCategory();
    // create an array of latters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLatters(wordLetters);
    setGameStage(stages[1].name);
  };

  const verifyLatter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    // check if letter has alredady been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    //push guessed letter os remove a guess
    if (letter.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
    console.log(guessedLetters);
    console.log(wrongLetters);
  };
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  const retry = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLatter={verifyLatter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={latters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
