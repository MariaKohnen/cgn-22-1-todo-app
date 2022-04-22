import useToDo from "../hooks/useToDo";
import ToDoOpen from "../components/ToDoOpen";
import CreateToDo from "../components/CreateToDo";
import ToDoInProgress from "../components/ToDoInProgress";
import ToDoDone from "../components/ToDoDone";
import "./Homepage.css";

export default function Homepage() {

    const {toDoList, addToDo} = useToDo();

    return (
        <div>
            <div id={"taskOverview"}>
                <CreateToDo addToDo={addToDo}/>
                <div id="taskGallery">
                    <div>
                        <ToDoOpen toDoList={toDoList}/>
                    </div>
                    <div>
                        <ToDoInProgress toDoList={toDoList}/>
                    </div>
                    <div>
                        <ToDoDone toDoList={toDoList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}