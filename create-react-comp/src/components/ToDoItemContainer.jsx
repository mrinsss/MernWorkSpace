import ToDoItem from "./ToDoItem";

function ToDoItemContainer({toDoItems, onDeleteClick}) {
    return (
        <>
        <div className="items-container">
            { 
                toDoItems.map(item => <ToDoItem key={item.name} toDoName={item.name} toDoDate = {item.dueDate} onDeleteButtonClick={onDeleteClick} /> )
            }
            {/* <ToDoItem toDoName="Buy Milk" toDoDate = '21/12/2024' />
            <ToDoItem toDoName="Go to College" toDoDate = '04/01/2025' /> */}
        </div>
        </>
    )
}

export default ToDoItemContainer;