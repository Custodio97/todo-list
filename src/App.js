import  React, {useState,useEffect} from 'react'
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  //State stuff
  //Use effect

  const [inputText,setInputText]=useState('')
   const [todos,setTodos]=useState([])
   const [status,setStatus]=useState('all')
   const [filteredTodos,setFilteredTodos]=useState([])
   //Run Once
    useEffect(()=>{
      getLocalTodos()
      saveLocalTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   useEffect(()=>{
    filterHandler()
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[todos,status]) 
   const filterHandler=()=>{
     // eslint-disable-next-line default-case
     switch(status){
       case "completed":
         setFilteredTodos(todos.filter(todo=>todo.completed ===true))
         break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo=>todo.completed ===false))
        break;
        default:
          setFilteredTodos(todos)
          break;
     }  
   }
   //Save to Local
   const saveLocalTodos=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
     
   }
   const getLocalTodos=()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
     let todoLocal= JSON.parse(localStorage.getItem('todos'))
     setTodos(todoLocal)
    }
   }
   return (
    <div className="App">
       <header> Ed 's Todo List </header>
       <Form 
       setStatus={setStatus} 
       inputText={inputText} 
       todos={todos} setTodos={setTodos} 
       setInputText={setInputText}></Form>
       <TodoList filteredTodos={filteredTodos}
       setTodos={setTodos} 
       todos={todos}></TodoList>

    </div>
  );
}

export default App;
