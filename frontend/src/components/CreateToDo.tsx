import {ToDo} from "../model/ToDo";
import {ChangeEvent, ChangeEventHandler, FormEvent, useState} from "react";
import {postToDoByApi} from "../service/ToDoListByApi";
import "./CreateToDo.css"

type CreateToDoProps = {
    addToDo: (newToDo: ToDo) => void;
}

export default function CreateToDo({addToDo}: CreateToDoProps) {

    const [id, setId] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<string>('OPEN')

    const handleSubmit = (event : FormEvent<HTMLFormElement> ) => {
        const newToDo = {id, description, status}
        console.log(newToDo)
        event.preventDefault()
        postToDoByApi(newToDo)
            .then(response => addToDo(response))
    }

    return (
        <div id={"createToDo"}>
            <form className={"formAddToDo"} onSubmit={handleSubmit}>
                <div>
                <label>Beschreibung</label>
                <input type="discription"
                       required
                       value={description}
                       onChange={(handleChange) => setDescription(handleChange.target.value)}
                />
                </div>
                <div>
                <button type={"submit"}>
                    Hinzufügen
                </button>
                </div>
            </form>
        </div>
    )
}