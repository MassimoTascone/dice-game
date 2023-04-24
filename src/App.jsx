import "./App.css";
import { Die } from "../src/components/Die/Die";
import { PushButton } from "../src/components/PushButton/PushButton";
import { RollCounter } from "./components/RollCounter/RollCounter";
import { useState } from "react";
import { nanoid } from "nanoid";
import { content } from "./translation";

export default function App() {
  //Helper function to generate new die
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  // Generate array of random nbrs
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateNewDie());
    }
    return diceArray;
  };

  // Reroll dice nbrs
  function handleRoll() {
    setRollNbr((oldRoll) => oldRoll + 1);
    setDice((oldState) =>
      oldState.map((dice) => {
        return dice.isHeld ? dice : generateNewDie();
      })
    );
  }

  function handleClick(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function langChange(e) {
    const langSelected = e.target.value;
    setLang(langSelected);
  }

  const [dice, setDice] = useState(allNewDice());
  const [rollNbr, setRollNbr] = useState(0);
  const [lang, setLang] = useState("eng");

  const diceElements = dice?.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        handleClick={() => handleClick(die.id)}
        isHeld={die.isHeld}
      />
    );
  });

  return (
    <main>
      <div className="lang--container">
        <select
          onChange={langChange}
          className="lang-select"
          name="lang"
          id="lang"
        >
          <option value="eng">EN</option>
          <option value="fr">FR</option>
        </select>
      </div>
      <h1 className="title">{content[lang].title}</h1>
      <p className="instructions">{content[lang].instructions}</p>
      <div className="dice--container">{diceElements}</div>
      <PushButton handleRoll={handleRoll} lang={lang} content={content} />
      <RollCounter lang={lang} rollNbr={rollNbr} content={content} />
    </main>
  );
}
