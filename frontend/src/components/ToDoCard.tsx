import {ToDo} from "../model/ToDo";
import "./ToDoCard.css"
import {FormEvent, MouseEventHandler, useState} from "react";
import {putToDoByApi} from "../service/ToDoListByApi";

type ToDoCardProps = {
    toDo: ToDo;
}

export default function ToDoCard({toDo}: ToDoCardProps) {

    const [status, setStatus] = useState<string>('')

    const onButtonClick : MouseEventHandler<HTMLButtonElement> = () => {
        updateStatus (toDo)
        putToDoByApi(toDo)
            .then(response => setStatus(response))
    }

    const updateStatus = (toDo : ToDo) => {
        if (toDo.status === "OPEN") {
            toDo.status = "IN PROGRESS";
        } else {
            toDo.status = "DONE";
        }
        return toDo;
    }

    return (
        <div id="toDoCard">
            <button onClick={onButtonClick}><img className={"buttonImg"} src={"To-Do-Check.png"} alt={"Grüner Button mit Haken"}/>
            </button>
            <div>{toDo.description}</div>
            <div>{toDo.status}</div>
        </div>
    )
}