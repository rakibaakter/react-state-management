import { createContext, useReducer } from "react";

export const  TodoContext = createContext([])

const initialState = [];
function reducer(currentState, action){
    switch (action.type) {
        case 'addTodo':
            return [...currentState, action.payload];
        case 'taskComplete':
            return currentState.map(item => item.id === action.payload ? {...item , isCompleted : !item.isCompleted } : item);
    
        default:
            return currentState;
    }
}

const TodoProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer, initialState);

    console.log('contex', state);

    const values = {state, dispatch}
    return (
        <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;