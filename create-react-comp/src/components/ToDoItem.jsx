import { MdDelete } from "react-icons/md";

function ToDoItem({toDoName, toDoDate, onDeleteButtonClick}){
    // let toDoName = 'Buy Milk';
    // let toDoDate = '21/12/2024';
    return (
        <div className="container ">
            <div className="row kg-row">
                <div className="col-6">
                    {toDoName}
                </div>
                <div className="col-4">
                    {toDoDate}
                </div>
                <div className="col-2">            
                    <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteButtonClick(toDoName)}>
                        <MdDelete />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ToDoItem;