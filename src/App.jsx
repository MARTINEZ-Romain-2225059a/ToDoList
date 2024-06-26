import './App.css';
import {useState} from "react";
import {HiArchiveBoxXMark, HiMiniPencilSquare} from "react-icons/hi2";
import {FaCalendarAlt} from "react-icons/fa";

function App() {
    const [TheList, SetTheList] = useState([]);

    const [NewTask, setNewTask] = useState(" ")

    const HandleChange = (event) =>{
        setNewTask(event.target.value);
    }
    const HandleSubmit = (event) =>{
        event.preventDefault()

        const List = [...TheList]
        const id = new Date().getTime()
        List.push({id: id, task: NewTask});
        SetTheList(List);
        setNewTask("");

    }

    const HandleButtonRemove = (id) =>{
        const ListId = [...TheList]
        const ListIDMD=ListId.filter((List) => List.id !== id);
        SetTheList(ListIDMD)

    }

    const HandleEditRemove = (id) =>{
        const ListId = [...TheList]
        const ListIDMD=ListId.filter((List) => List.id !== id);
        SetTheList(ListIDMD)

    }

    return (
        <>
            <h1>Tâches à faire : </h1>
            <form action="submit" onSubmit={HandleSubmit}>
                <button>Ajouter une tâche</button>
                <input value={NewTask} type="text" placeholder="Votre nouvelle tâche..." onChange={HandleChange}/>
            </form>
            <ul>
                {TheList.map((List) => (
                    <form action="submit">
                        <input type="checkbox"></input>
                            {List.task}
                        <button onClick={() =>HandleButtonRemove(List.id)}><HiArchiveBoxXMark /></button>
                        <button onClick={() =>HandleEditRemove(List.id)}><HiMiniPencilSquare /></button>
                        <button onClick={() =>HandleEditRemove(List.id)}><FaCalendarAlt /></button>
                    </form>
                ))}
            </ul>
        </>
    )
}

export default App