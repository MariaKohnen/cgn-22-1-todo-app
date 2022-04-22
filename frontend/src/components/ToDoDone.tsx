import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";
import "./ToDoCard.css";

type ToDoOverviewProps = {
    toDoList : ToDo[];
}

export default function ToDoInDone({toDoList} : ToDoOverviewProps) {

    const toDoInDone = toDoList.filter(obj => obj.status === "DONE")

    return (
        <div className="ToDoOverview">
            <h2>Well done!</h2>
            <div>
                {toDoInDone.map(obj => <ToDoCard key={obj.id} toDo={obj} />)}
            </div>
        </div>
    )
}