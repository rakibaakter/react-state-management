import { useReducer } from "react";

const initial = {
    name : "",
    age : "",
    hobbies : []
}

function reducer(currentState, action){
    switch (action.type) {
        case "addName":
            return {...currentState, name : action.payload}
        case "addAge":
            return {...currentState, age : action.payload}
        case "addHobbies":
            return {...currentState, hobbies : [...currentState.hobbies, action.payload]}
    
        default:
          return  currentState;
    }
}

const UserInfoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initial);
    console.log(state);
    return (
        <div>
            <form>
                <input onChange={(e)=>dispatch({type : "addName", payload : e.target.value})} type="text" name ="name" placeholder="name" className="border border-red-500 ml-4 p-2"/>
                <input onChange={(e)=>dispatch({type : "addAge", payload : e.target.value})} type="text" name ="age" placeholder="age" className="border border-red-500 ml-4 p-2"/>
                <input onBlur={(e)=>dispatch({type : "addHobbies", payload : e.target.value})} type="text" name ="hobbies" placeholder="hobbies" className="border border-red-500 ml-4 p-2"/>
                <input type="submit" value="Submit" className="bg-blue-100 p-2 ml-4"/>
            </form> 
        </div>
    );
};

export default UserInfoWithUseReducer;