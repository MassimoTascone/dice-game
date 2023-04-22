import "./App.css";
import { Die } from "../src/components/Die/Die";
import { PushButton } from "../src/components/PushButton/PushButton";
import { useState } from "react";

export default function App() {
  // Generate array of random nbrs
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }
    return diceArray;
  };

  // Reroll dice nbrs
  const handleClick = () => setDice(allNewDice);

  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die, index) => {
    return <Die value={die} key={index} />;
  });

  return (
    <main>
      <div className="dice--container">{diceElements}</div>
      <PushButton handleClick={handleClick} name={"Roll New Dice"} />
    </main>
  );
}
