import "./App.css";
import { Die } from "../src/components/Die/Die";
import { PushButton } from "../src/components/PushButton/PushButton";
import { RollCounter } from "./components/RollCounter/RollCounter";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { content } from "./translation";

//Helper function to generate new die
const generateNewDie = () => ({
  value: Math.ceil(Math.random() * 6),
  isHeld: false,
  id: nanoid(),
});
// Generate array of random nbrs
const allNewDice = () => Array(10).fill().map(generateNewDie);

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [rollNbr, setRollNbr] = useState(0);
  const [lang, setLang] = useState("eng");
  const [gameWon, setGameWon] = useState(false);
  const [isBtnDisable, setIsBtnDisable] = useState(false);

  // Reroll dice nbrs
  function handleRoll() {
    setRollNbr((oldRoll) => oldRoll + 1);
    setDice((oldState) =>
      oldState.map((dice) => {
        return dice.isHeld ? dice : generateNewDie();
      })
    );
  }
  function restartGame() {
    setDice(allNewDice());
    setGameWon(false);
    setRollNbr(0);
  }
  function langChange(e) {
    const langSelected = e.target.value;
    setLang(langSelected);
  }
  function handleClick(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  useEffect(() => {
    const allHeld = dice?.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice?.every((die) => die.value === firstValue);

    allHeld && allSameValue && setGameWon(true);
    allHeld && !allSameValue && setIsBtnDisable(true);
    allHeld && !allSameValue ? setIsBtnDisable(true) : setIsBtnDisable(false);
  }, [dice]);

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
      <div className="dice--container">
        {dice?.map((die) => (
          <Die
            value={die.value}
            key={die.id}
            handleClick={() => handleClick(die.id)}
            isHeld={die.isHeld}
          />
        ))}
      </div>
      <PushButton
        onClick={gameWon ? restartGame : handleRoll}
        disabled={isBtnDisable}
      >
        {gameWon ? content[lang].again : content[lang].btn}
      </PushButton>
      <RollCounter lang={lang} rollNbr={rollNbr} content={content} />
      {gameWon && (
        <p className="win-txt">
          <b>{content[lang].win}</b>
        </p>
      )}
      {isBtnDisable && <p>{content[lang].warning}</p>}
    </main>
  );
}
