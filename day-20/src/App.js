import './App.css';
import {useEffect, useState} from "react";

const Todo = ({todo, todos, setTodos, index})=>{
  return(
    <div className="todolist">
      <h3>{todo}</h3>
      <button onClick={()=>{
        console.log("Delete =", todo);
        const newTodo = todos.filter((el,i)=>i !== index);
        setTodos(newTodo);
      }}>delete</button>
      
    </div>
  );
}
function App() {
  const [value, setValue] = useState();
  let [todos, setTodos] = useState(["Abc", "XYZ"]);
  useEffect(()=>{
    setTodos([])
  },[]);
  //todos = ["Abc", "XYZ"];
  return (
    <div className="App">
      <input type="text" onChange={(e)=>{
        setValue(e.target.value)
      }}
      value={value}></input>
      <button onClick={()=>{
        setTodos([...todos, value]);
        setValue("");
      }}>Add</button>
      {
        todos.map((todo, index)=>(
          <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} index={index}/>
        ))
      }
    </div>
  );
}

export default App;
