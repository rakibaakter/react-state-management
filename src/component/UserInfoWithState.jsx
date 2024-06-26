import { useState } from "react";

const UserInfoWithState = () => {
    const [user , setUser] = useState({name : "", age : "", hobbies : []});
    console.log(user);
    return (
        <div>
          <form>
                <input onChange={(e)=>{setUser({...user,name : e.target.value})}} type="text" name ="name" placeholder="name" className="border border-red-500 ml-4 p-2"/>
                <input onChange={(e)=>{setUser({...user, age : e.target.value})}} type="text" name ="age" placeholder="age" className="border border-red-500 ml-4 p-2"/>
                <input onBlur={(e)=>{setUser({...user, hobbies : [...user.hobbies, e.target.value]})}} type="text" name ="hobbies" placeholder="hobbies" className="border border-red-500 ml-4 p-2"/>
                <input type="submit" value="Submit" className="bg-blue-100 p-2 ml-4"/>
            </form>  
        </div>
    );
};

export default UserInfoWithState;