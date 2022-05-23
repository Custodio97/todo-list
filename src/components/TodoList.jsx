import React from 'react'
//IMPORT COMPONENTS
import Todo from './Todo'
const TodoList=({todos,setTodos,filteredTodos})=>{
  
  console.log(todos)
  return (
    <div className='todo-container'>
       <ul  className='todo-list'>
         {filteredTodos.map((todo)=>(
           <Todo todo={todo} 
           setTodos={setTodos} 
           todos={todos} key={todo.id} 
           text={todo.text} 
           id={todo.id}></Todo>
         ))}
       </ul>
    </div>
  )
}

export default TodoList