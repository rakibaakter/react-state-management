import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const ToDoForm = () => {
    const {state, dispatch} = useContext(TodoContext);
    const [task, setTask] = useState('')

    console.log(state);

    const handleSubmit = e =>{
        e.preventDefault()
        const todo = {
            id: Math.random().toString(36).substring(2, 7),
            title : task,
            isCompleted : false
        }
        dispatch({type: 'addTodo', payload : todo})
    }
    

    return (
        <div>
            <h1>this is todo form </h1>
            <form onSubmit={handleSubmit}>
                <level id="title">Task Title</level>
                <input onBlur={e => setTask(e.target.value)} type="text" name ="title" placeholder="title" id="title" className="border p-1 rounded-md m-2 border-black"/>
                <input type="submit" value="Submit" className="p-1 rounded-md m-2 bg-green-200"/>
            </form>
        </div>
    );
};

export default ToDoForm;