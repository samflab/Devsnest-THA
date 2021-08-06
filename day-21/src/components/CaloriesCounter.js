import { useState } from "react";
import Container from "./Container";

const CaloriesCounter = () => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [cards, setCards] = useState("");
  const handleClick = (e) => {
      e.preventDefault();
      const newCards = [...cards, {food: food, calories: calories}];
      setCards(newCards);
  }
  return (
    <div className="App">
      <form>
        <label>Food Item: </label>
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <label>Calories: </label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" onClick={handleClick}>
          Add Count
        </button>
      </form>
      <br/>
      <Container cards={cards} handleClick={setCards}/>
    </div>
  );
};

export default CaloriesCounter;