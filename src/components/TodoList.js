import React from 'react'
import {TiTick, TiEdit} from 'react-icons/ti';
function TodoList({todos,deleteItem,editItem,deleteAll}) {
    
    
  return (
        <div className='showTodo'>
        {
          todos.map((todo)=>{
            return(
              <div className='display' key={todo.id}>
                <p>{todo.name}</p>
                <div className='icons'>
                <TiTick className='deleteIcon' onClick={()=>deleteItem(todo.id)} />
                <TiEdit className='editIcon' onClick={()=>editItem(todo.id)} />
                </div>
              </div>
            )
          })
        }
        <button className='clear' onClick={deleteAll}>Clear <i className="bi bi-trash-fill clr" ></i></button>
      </div>
  )
}

export default TodoList