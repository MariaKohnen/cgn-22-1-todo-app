import useToDo from "../hooks/useToDo";
import ToDoOverview from "../components/ToDoOverview";
import CreateToDo from "../components/CreateToDo";

export default function Homepage() {

    const {toDoList, addToDo} = useToDo();

    return (
        <div>
            <div>
            <h1>Hier kommt eine Übersicht</h1>
                <CreateToDo addToDo={addToDo} />
                <ToDoOverview toDoList={toDoList} />
            </div>
        </div>
    )
}