// CSS
import './App.css';

//React
import {useEffect, useState, useCallBack} from 'react';

//Data
import {wordsList} from './data/Words';

// Component
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

const guessesQtd = 3;

function App() {
  const [gamestages, setGamestages] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrogLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQtd);
  const [score, setScore] = useState(0);

  const PickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return {category, word};
  };

  const startGame = () => {
    const {category, word} = PickedWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGamestages(stages[1].name);
  }

  const verifyLetter = () => {
    setGamestages(stages[2].name);
  };

  const retry = () => {
    setGamestages(stages[0].name);
  };

  return (
    <div className="App">
      {gamestages === 'start' && <StartScreen startGame={startGame}/>}
      {gamestages === 'game' &&
      <Game
        verifyLetter={verifyLetter}
        setPickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        setWrongLetters={setWrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gamestages === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
