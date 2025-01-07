// import KgButton from "./KgButton";
// import Random from "./Random";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ToDoItem from "./components/ToDoItem";

import './Custom.css'
import ToDoItemContainer from "./components/ToDoItemContainer";

function App() {
  // let toDoName = 'Buy Milk';
    // let toDoDate = '21/12/2024';
  const todoObj = [
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
  return ( 
    <center className='todo-container'>
      <AppName />
      
      <AddTodo />

      <ToDoItemContainer toDoItems={todoObj} />

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