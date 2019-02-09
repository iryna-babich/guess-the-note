import React, { Component } from "react";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultsScreen";
import GameScreen from "./components/GameScreen";
import Tone from "tone";
import "./App.css";

const notes = [
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
  ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
  ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"],
  ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#"],
  ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
  ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]
];

const octave = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

const setRightAnswersCount = 5;

class App extends Component {
  static getRandomStringIndex() {
    return Math.floor(Math.random() * notes.length);
  }

  static getRandomNoteIndex() {
    return Math.floor(Math.random() * notes[0].length);
  }

  state = {
    screen: 1,
    randomStringIndex: null,
    randomNoteIndex: null,
    wrongGuesses: [],
    totalWrongGuessesCount: 0,
    rightGuess: "",
    rightGuessesArr: []
  };

  playTheNote = note => {
    var synth = new Tone.Synth().toMaster();

    // Play the note for the duration of an 8th note.
    synth.triggerAttackRelease(`${note}4`, "8n");
  };

  assignNoteToGuess = () => {
    const randomStringIndex = App.getRandomStringIndex();
    const randomNoteIndex = App.getRandomNoteIndex();

    this.playTheNote(notes[randomStringIndex][randomNoteIndex]);
    this.setState({
      randomStringIndex: randomStringIndex,
      randomNoteIndex: randomNoteIndex
    });
  };

  startGameHandler = () => {
    this.setState({
      screen: 2
    });
    this.assignNoteToGuess();
  };

  restartClickHandler = () => {
    this.setState({
      wrongGuesses: [],
      rightGuess: "",
      rightGuessesArr: []
    });
    this.startGameHandler();
  };

  handleNoteClick = i => {
    const isCorrectNote =
      octave[i] ===
      notes[this.state.randomStringIndex][this.state.randomNoteIndex];

    this.playTheNote(octave[i]);
    // let wrongGuessesCount = this.state.wrongGuesses.length;
    if (isCorrectNote) {
      // If it's a correct guess, updating state, adding correct answer to the rightGuessesArr.
      this.setState(state => {
        const updatedrightGuessesArr = [...state.rightGuessesArr, octave[i]];
        const resetWrongGuesses = [];
        const rightGuessesCount = updatedrightGuessesArr.length;

        // Hightlight next random note after we guessed the correct note if rightGuessArr is less than setRightAnswersCount.
        if (rightGuessesCount < setRightAnswersCount) {
          const randomStringIndex = App.getRandomStringIndex();
          const randomNoteIndex = App.getRandomNoteIndex();

          this.playTheNote(notes[randomStringIndex][randomNoteIndex]);

          return {
            wrongGuesses: resetWrongGuesses,
            rightGuessesArr: updatedrightGuessesArr,
            randomStringIndex: randomStringIndex,
            randomNoteIndex: randomNoteIndex
          };
        } else {
          return {
            screen: 3,
            rightGuessesArr: updatedrightGuessesArr
          };
        }
      });
    } else {
      this.setState(state => {
        const updatedWrongGuesses = [...state.wrongGuesses, octave[i]];
        const updatedtotalWrongGuessesCount = state.totalWrongGuessesCount + 1;
        return {
          wrongGuesses: updatedWrongGuesses,
          totalWrongGuessesCount: updatedtotalWrongGuessesCount
        };
      });
    }
  };

  render() {
    const allStrings = [];
    const answerString = [];
    const {
      screen,
      randomStringIndex,
      randomNoteIndex,
      wrongGuesses,
      totalWrongGuessesCount,
      rightGuess,
      rightGuessesArr
    } = this.state;

    // Render guitar strings.
    for (let i = 0; i < notes.length; i++) {
      const stringToRender = [];
      let stringButtonClasses = "";
      for (let j = 0; j < notes[i].length; j++) {
        // Highlight randomly picked note.
        if (i === randomStringIndex && j === randomNoteIndex) {
          // this.playTheNote(notes[i][j]);
          stringButtonClasses = "string-item is-highlighted";
          console.log("highlighted:", notes[i][j]);
        } else {
          stringButtonClasses = "string-item";
        }
        stringToRender.push(
          <li className={stringButtonClasses} key={`${i}-${j}`}>
            <button>{notes[i][j]}</button>
          </li>
        );
      }

      allStrings.push(
        <ul className="string" key={i}>
          {stringToRender}
        </ul>
      );
    }

    for (let i = 0; i < octave.length; i++) {
      let buttonClasses = "";
      const isWrongGuesses = wrongGuesses.includes(octave[i]);
      const isRightGuess = rightGuess === octave[i];

      if (isWrongGuesses) {
        buttonClasses = "is-wrong";
      } else if (isRightGuess) {
        buttonClasses = "is-correct";
      }

      answerString.push(
        <li key={i}>
          <button
            onClick={() => this.handleNoteClick(i)}
            className={buttonClasses}
          >
            {octave[i]}
          </button>
        </li>
      );
    }

    let rightGuessedNotes = rightGuessesArr.join(", ");

    console.log("latest wrongGuesses:", this.state.wrongGuesses);
    console.log("total wrong guesses count:", totalWrongGuessesCount);
    console.log(
      "latest rightGuesses:",
      this.state.rightGuessesArr,
      this.state.rightGuessesArr.length
    );
    console.log("screen:", this.state.screen);

    // Render screen.
    if (screen === 1) {
      return (
        <div className="App">
          <StartScreen startTheGame={this.startGameHandler} />
        </div>
      );
    }
    if (screen === 2) {
      return (
        <div className="App">
          <GameScreen
            allStringsRender={allStrings}
            answerStringRender={answerString}
            rightGuessesArr={rightGuessesArr}
          />
        </div>
      );
    }
    if (screen === 3) {
      return (
        <div className="App">
          <ResultScreen
            restartTheGame={this.restartClickHandler}
            totalWrongGuessesCount={totalWrongGuessesCount}
            rightGuessedNotes={rightGuessedNotes}
          />
        </div>
      );
    }
  }
}

export default App;
