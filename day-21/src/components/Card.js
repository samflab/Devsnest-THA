import { useState } from "react";
const Card = ({index, food, calories, handleClick, handleEdit, state}) => {
    const [isEdit, setEdit] = useState(false);
    const [currentFood, setCurrentFood] = useState(food);
    const [currentCalories, setCurrentCalories] = useState(calories);

    const handleEditCard = () => {
        if (isEdit) {
          handleEdit(index, { title: currentFood, value: currentCalories });
          setEdit(!isEdit);
        } else {
          setEdit(!isEdit);
          setCurrentFood(currentFood);
          setCurrentCalories(currentCalories);
        }
      };

    return(
        <div className="card">
            {
                isEdit ? (
                    <div className="random">
                        <input type="text" required="required" value={currentFood} onChange={(e)=>setCurrentFood(e.target.value)}/>
                        <input type="number" required="required" value={currentCalories} onChange={(e) => setCurrentCalories(e.target.value)}/>
                        <button className="edit-btn" onClick={handleEditCard}> Save</button>
                    </div>
                ) : (
                    <div>
                        <h2>{food}</h2>
                        <p className="text">You have consumed {calories} calories</p>
                        <button className="delete-btn" onClick={handleClick}> Delete</button>
                        <button className="edit-btn" onClick={handleEditCard}>Edit</button>
                    </div>
                 )}
        </div>
    );
};

export default Card;
