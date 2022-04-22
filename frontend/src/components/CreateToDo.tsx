import {ToDo} from "../model/ToDo";
import {ChangeEvent, ChangeEventHandler, FormEvent, useState} from "react";
import {postToDoByApi} from "../service/ToDoListByApi";

type CreateToDoProps = {
    addToDo: (newToDo: ToDo) => void;
}

export default function CreateToDo({addToDo}: CreateToDoProps) {

    const [id, setId] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<string>('DONE')

    const handleSubmit = (event : FormEvent<HTMLFormElement> ) => {
        const newToDo = {id, description, status}
        console.log(newToDo)
        event.preventDefault()
        postToDoByApi(newToDo)
            .then(response => addToDo(response))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Beschreibung</label>
                <input type="discription" required value={description} onChange={(handleChange) => setDescription(handleChange.target.value)}/>
                <button type={"submit"}>Hinzufügen</button>
            </form>
        </div>
    )
}