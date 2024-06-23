import React from "react";
class CounterWithClass extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    render(){
        const {count} = this.state
        console.log("hello");
        return <button onClick={()=>this.setState({count : count + 1})}>{count}</button>
    }
}


export default CounterWithClass;