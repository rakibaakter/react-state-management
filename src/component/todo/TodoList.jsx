import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    return (
        <div>
            <h2>Todo List</h2>
            <table className="border w-full">
                <tr className="border w-full">
                <th >id</th>
                <th>task</th>
                <th>isCompleted</th></tr>
            
            {
                state.length && state.map(item => <tr key={item.id} className="border w-full">
                    <td>{item.id}</td>
                    <td className="cursor-pointer" onClick={()=> dispatch({type : 'taskComplete', payload : item.id})}>{item.title}</td>
                    <td>{item.isCompleted ? "Completed" : "Doing"}</td>
                </tr>)
            }
            </table>
        </div>
    );
};

export default TodoList;