import { useState } from "react";
import { useEffect } from "react";
import "./CSS/Todo.css"
import { useRef } from "react";
import TodoItems from "./TodoItems";


let count =0;
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const add = () => { 
        setTodos([...todos,{no:count++, text:inputRef.current.value, display:""}]) ;
        inputRef.current.value = "";
        localStorage.setItem("todos_count",count);
    }

        useEffect( () => {
            setTodos(JSON.parse(localStorage.getItem("todos")))
            count = localStorage.getItem("todos_count");
        },[])
    // Now we will create a useEffect hook to store our todos in local storage
        useEffect(() => {
            
            setTimeout(() =>{
                console.log(todos);
            // Now we will create local storage for storing our todos, we need to convert our todos array into string
            localStorage.setItem("todos",JSON.stringify(todos));
            }, 50);
        },[todos])

  return (
    <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder="add your task" className="todo-input" />
            <div onClick={() =>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
        {todos.map((item,index) => {
            return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
        })}
        </div>
      </div>
  )
}

export default Todo
