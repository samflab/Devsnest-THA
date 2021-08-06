import './App.css';
import Card from './components/Card';
import {useState} from "react";

function App() {
  let [card, setCard] = useState([
    {
      calories: "180",
      food: "Rajama Chawal"
    },
    {
      calories: "100",
      food: "Samosa"
    },
    {
      calories: "50",
      food: "Vegetable Saute"
    },
    {
      calories: "75",
      food: "Pizza"
    },
    {
      calories: "98",
      food: "Chowmein"
    },
    {
      calories: "200",
      food: "Kadhi Chawal"
    },
  ]);
  return (
    <div className="App">
      {
      card.length ?
      
        card.map((item, index)=>(
          <Card food={item.food} calories={item.calories} key={index} card={card} setCard={setCard} index={index}/>
        ))
      :
      <h3>No card left to display</h3>
    }
    </div>
  );
}

export default App;
