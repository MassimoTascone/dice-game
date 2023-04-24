import "./App.css";
import { Die } from "../src/components/Die/Die";
import { PushButton } from "../src/components/PushButton/PushButton";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  // Generate array of random nbrs
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  };

  // Reroll dice nbrs
  function handleRoll() {
    setDice(allNewDice);
  }

  function handleClick(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const [dice, setDice] = useState(allNewDice());

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
  console.log({ dice });
  return (
    <main>
      <div className="dice--container">{diceElements}</div>
      <PushButton handleRoll={handleRoll} name={"Roll Dice"} />
    </main>
  );
}
