import {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";

type ToDoOverviewProps = {
    toDoList : ToDo[];
}

export default function ToDoOverview({toDoList} : ToDoOverviewProps) {
    return (
        <div>
            {toDoList.map(obj => <ToDoCard key={obj.id} toDo={obj} />)}
        </div>
    )
}