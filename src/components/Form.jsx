import React from 'react'

const Form=({setInputText,todos,setTodos,inputText,setStatus})=>{
    //Here I can write javascript code and function
    const inputTextHandler=(e)=>{
         setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
      e.preventDefault()
      // eslint-disable-next-line no-undef
      setTodos([...todos,{
        text:inputText ,
        completed:false,
        id:Math.random() * 1000}])
       setInputText("")
    }
    const statusHandle=(e)=>{
      setStatus(e.target.value)
    }
  return (
    <div className='todo-form'>
       <form>
        <input onChange={inputTextHandler} type='text' 
        className='todo-input' value={inputText}></input>
        <button onClick={submitTodoHandler} 
        className="todo-button" type='submit'>
         +  
        </button>    
        <div className="select">
            <select onChange={statusHandle} 
            name="todos" className='filter-todo'>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
        </select>
        </div>
        
       </form> 
    </div>
  )
}

export default Form