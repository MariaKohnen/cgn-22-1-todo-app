import {ToDo} from "../model/ToDo";
import "./ToDoCard.css"

type ToDoCardProps = {
    toDo : ToDo;
}

export default function ToDoCard({toDo} : ToDoCardProps) {
    return (
        <div id="toDoCard">
            <div>{toDo.description}</div>
            <div>{toDo.status}</div>
        </div>
    )
}