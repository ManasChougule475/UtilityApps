import "./ToDoList.css";
import { useSelector , useDispatch} from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";

function ToDoList() {
    const todos = useSelector(todoSelector);  // const todos = store.getState().todos;
    const dispatch = useDispatch();

    return (
    <div className="container">
    <ul>
        {todos.map((todo,index) => (
        <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
            <button className="btn btn-warning"
            onClick={()=>dispatch(actions.toggle(index))}
            >Toggle</button>
            </li>
        ))}
    </ul>
    </div>
    );
}

export default ToDoList;
