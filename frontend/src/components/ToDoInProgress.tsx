import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";
import "./ToDoCard.css";

type ToDoOverviewProps = {
    toDoList : ToDo[];
}

export default function ToDoInProgress({toDoList} : ToDoOverviewProps) {

    const toDoInProgress = toDoList.filter(obj => obj.status === "IN PROGRESS")

    return (
        <div className="ToDoOverview">
            <h2>Let's do!</h2>
            <div>
                {toDoInProgress.map(obj => <ToDoCard key={obj.id} toDo={obj} />)}
            </div>
        </div>
    )
}