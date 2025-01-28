// import KgButton from "./KgButton";
// import Random from "./Random";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItem from "./components/ToDoItem";

import './Custom.css'
import ToDoItemContainer from "./components/ToDoItemContainer";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
  const initTodoObj = [
    {
      name: 'Buy Milk',
      dueDate: '21/12/2024'
    },
    {
      name: 'Go to College',
      dueDate: '30/12/2024'
    },
    {
      name: 'Like This Video',
      dueDate: '04/01/2025'
    }
  ];

  const [todoObj, setTodoObj] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item added: ${itemName} Date: ${itemDate}`);
    const newToDoObj = [...todoObj, {name: itemName, dueDate: itemDate}];
    setTodoObj(newToDoObj);
  }

  
  const handleDeleteItem = (delItemName) => {
    console.log(`deleted item: ${delItemName}`);
    const newToDoItems = todoObj.filter(item => item.name !== delItemName);
    setTodoObj(newToDoItems);
  }

  return ( 
    <center className='todo-container'>
      <AppName />
      
      <AddTodo onNewItem={handleNewItem} />

      {todoObj.length ===0 && <WelcomeMessage />}
      <ToDoItemContainer toDoItems={todoObj} onDeleteClick={handleDeleteItem} />

      {/* <div class="items-container">
        <ToDoItem toDoName="Buy Milk" toDoDate = '21/12/2024' />
        <ToDoItem toDoName="Go to College" toDoDate = '04/01/2025' />
      </div> */}
      
    </center>
  )
}

{/*
function App() {
  return <div>
    <h1>
      Hello World, This is the best react course
    </h1>
    
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
    
  </div>
}
*/}

export default App;