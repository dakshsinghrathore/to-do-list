import "./CSS/TodoItems.css"

const TodoItems = ({no, display, text, setTodos}) => {

  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no!==no);
    setTodos(data)
    }
  

  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
        if(data[i].no===no){
          if(data[i].display===""){
            data[i].display="line-through";
          }
          else{
            data[i].display="";
          }
          break;
        }
    }
    setTodos(data);
  }

  return (
    <div className="todoitems">
        <div className={`todoitems-container ${display}` } onClick={()=>{toggle(no)}}>
      {display===""?  <img src="https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/ea92820d-b933-4864-a97d-39dad63c0b33" alt="" />: <img src="https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/3fade258-f422-4a3e-9eb7-4939ff3e925b" alt="" />} 
        
        <div className="todoitems-text">
            {text}

        </div>

        </div>
        <img className="todoitems-cross-icon" src="https://github.com/dakshsinghrathore/Brighter-Beginnings/assets/115932772/724195af-6917-4f6a-bb4d-6650e5b27960" alt="" onClick={() =>{deleteTodo(no)}} />
    </div>
  )
}

export default TodoItems
