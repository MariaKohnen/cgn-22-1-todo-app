import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";
import "./ToDoOverview.css"

type ToDoOverviewProps = {
    toDoList : ToDo[];
}

export default function ToDoOverview({toDoList} : ToDoOverviewProps) {

    const toDoOpen = toDoList.filter(obj => obj.status === "OPEN")

    return (
        <div id="ToDoOverview">
            <h2>Lets start</h2>
            <div>
            {toDoOpen.map(obj => <ToDoCard key={obj.id} toDo={obj} />)}
            </div>
        </div>
    )
}