import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({onNewItem}) {
    const [toDoName, setToDoName] = useState("")  ;
    const [toDoDate, setToDoDate] = useState("")  ;

    const handleNameChange = (event) => {
        // console.log(event.target.value)
        const newname = event.target.value;
        setToDoName(newname);
    }
    const handleDateChange = (event) => {
        // console.log(event.target.value)
        const newdate = event.target.value;
        setToDoDate(newdate);
    }
    
    const handleAddButtonClick = () => {
        onNewItem(toDoName,toDoDate);
        setToDoDate("");
        setToDoName("");
    }

    return (
        <div className="container items-container">        
            <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Enter Todo here" value={toDoName} onChange={handleNameChange} />
            </div>
            <div className="col-4">
                <input type="date" value={toDoDate} onChange={handleDateChange} />
            </div>
            <div className="col-2">            
                <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClick}>
                    <BiMessageAdd/>
                </button>
            </div>
            </div>
        </div>
    )
}

export default AddTodo;