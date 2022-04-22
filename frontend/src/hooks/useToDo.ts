import {ToDo} from "../model/ToDo";
import {useEffect, useState} from "react";
import {getToDoListByApi} from "../service/ToDoListByApi";

export default function useToDo() {

    const [toDoList, setToDoList] = useState<ToDo[]>([]);

    const addToDo = (newToDo : ToDo) => {
        setToDoList((allToDos : ToDo[]) => [...allToDos, newToDo]);
    }

    useEffect( () => {
        getToDoListByApi()
            .then(response => setToDoList(response));
    }, [] )


 return {toDoList, addToDo};
}