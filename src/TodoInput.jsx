import {useState} from "react";

// eslint-disable-next-line react/prop-types
const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {e.preventDefault();
        if(value === ""){return console.log("Veuillez ajouter une tâche")}
        createTodoItem(value)
        setValue("")}

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Create todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Create</button>
        </form>
    )

}

export default TodoInput