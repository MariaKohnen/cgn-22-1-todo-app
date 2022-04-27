import {ToDo} from "../model/ToDo";
import {MouseEventHandler, useEffect, useState} from "react";
import {getToDoListByApi, putToDoByApi} from "../service/ToDoListByApi";
import {getNextStatus} from "../service/toDoService";

export default function useToDo() {

    const [toDoList, setToDoList] = useState<ToDo[]>([]);
    const [status, setStatus] = useState<string>('')

    const addToDo = (newToDo : ToDo) => {
        setToDoList((allToDos : ToDo[]) => [...allToDos, newToDo]);
    }

    const advanceToDo = (toDo : ToDo) => {
        const newStatus = getNextStatus(toDo.status)
        const advancedToDo = {... toDo, status: newStatus}
        putToDoByApi(toDo)
            .then(response => setStatus(response))
    }

    useEffect( () => {
        getToDoListByApi()
            .then(response => setToDoList(response))
            .catch(console.error)
    }, [] )


 return {toDoList, addToDo};
}