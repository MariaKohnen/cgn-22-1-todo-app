import axios from "axios";
import {ToDo} from "../model/ToDo";

export function getToDoListByApi() {
    return axios.get("/api/todo")
        .then(response => response.data)
        .catch(console.error)
}

export function postToDoByApi(newToDo : ToDo) {
    return axios.post("/api/todo", newToDo)
        .then(response => response.data)
        .catch(console.error)
}