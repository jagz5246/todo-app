import React from 'react'
import {TiTick, TiEdit} from 'react-icons/ti';


function TodoList({todos,deleteItem,editItem,deleteAll}) {
    
    
  return (
        <div className='display-todo'>
        {
          todos.map((todo)=>{
            return(
              <div className='todo-desc' key={todo.id}>
                <p> {todo.name}</p>
                <div className='todo-icons'>
                <TiTick className='deleteIcon' onClick={()=>deleteItem(todo.id)} />
                <TiEdit className='editIcon' onClick={()=>editItem(todo.id)} />
                </div>
              </div>
            )
          })
        }
        <button className='clear' onClick={deleteAll}>Clear</button>        
      </div>
  )
}

export default TodoList
