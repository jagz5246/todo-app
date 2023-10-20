
import React from 'react'
import logo from './logo.png'
import {useState, useEffect} from 'react'
import TodoList from './TodoList';

const Todo =()=>{
//To get Todos from LOCAL STORAGE
const getLocalItems=()=>{
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}

const [inputData, setData] = useState('');
const [todos, setTodos] = useState(getLocalItems());
const [editTodo, setEditTodo] = useState(false);
const [editTodoId, setEditTodoId] = useState(null);
const addItem=()=>{
  if(!inputData){
    alert("Enter valid data");
    setEditTodo(false)
  }
  else if(inputData && editTodo){
    setTodos(todos.map((elem)=>{
      if(elem.id === editTodoId){
        console.log(elem)
        return {...elem, name:inputData}
      }
      console.log(elem)
      return elem;
    }
    ))
    setEditTodo(false);
    setData('');
    setEditTodoId(null);
  }
  else{
    const newInputData = {id: new Date().getTime().toString(), name: inputData};
    setTodos([...todos, newInputData]);
    setData('');
    setEditTodo(false)
  }
}
const editItem=(id)=>{
  let newEditItem = todos.find((todo)=>{
    return todo.id === id;
  } )
  setEditTodo(true);
  setData(newEditItem.name);
  setEditTodoId(id);
}

const deleteItem=(id)=>{
  const updatedList = todos.filter((todo)=>{
    return todo.id!==id;
  });
  setTodos(updatedList);
}

const deleteAll=()=>{
  setTodos([]);
  setEditTodo(false);
}

//To set Todos in Local Storage
useEffect(() => {
  localStorage.setItem("lists", JSON.stringify(todos));
  localStorage.setItem("lists", JSON.stringify(todos));
 }, [todos])


  return (
    <div className='parent'>
     <img className='todo-image' src={logo} alt="Logo" />
      <div className='app'>
        <div className='fields'>
          <input className='field-desc' type="text" placeholder="📝 Add a task" value={inputData} 
          onChange={(e)=> setData(e.target.value)} />
          {editTodo?<button className='addItem' onClick={addItem}>📝</button>:<button className='addItem' onClick={addItem}>+</button>}
        </div>
      <TodoList todos={todos} deleteItem={deleteItem} deleteAll={deleteAll} editItem={editItem}/>
      </div>
    </div>
      )
}

export default Todo;
