import {ToDo} from "../model/ToDo";

type ToDoCardProps = {
    toDo : ToDo;
}

export default function ToDoCard({toDo} : ToDoCardProps) {
    return (
        <div>
            <div>{toDo.description}</div>
            <div>{toDo.status}</div>
        </div>
    )
}