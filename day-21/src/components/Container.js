import Card from "./Card";
;
const Container = ({cards, handleClick}) => {
    const handleDelete = (index) => {
      const newCards =cards.filter((item, index2)=>index2 !== index);
      handleClick(newCards);
    };
  
    const handleEdit = (index, value) => {
        const newCards = [...cards];
        newCards[index] = value;
        handleClick(newCards);
    };
  
    return (
      <div className="container">
        {!cards || cards.length === 0 ? (
          <div>Add your calorie count</div>
        ) : (
          cards.map((item, index) => (
            <Card
              index={index}
              food={item.food}
              calories={item.calories}
              key={index}
              handleClick={() => handleDelete(index)}
              handleEdit={() => handleEdit}
              state={handleClick}
            />
          ))
        )}
      </div>
    );
  };

  export default Container;