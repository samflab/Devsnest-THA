function Card({ food, calories, card, setCard, index }) {
    
  return (
    <div className="container">
      <div>
        <button onClick={()=>{
            console.log("Delete =", food);
            const newCard = card.filter((el, i)=> i !== index);
            setCard(newCard);
        }} style={{ float: "right" }}>Delete</button>
        <h2>{food}</h2>
        <h3>You have consumed {calories} cals today</h3>
      </div>
    </div>
  );
}
export default Card;
