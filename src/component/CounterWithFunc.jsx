
import ChildComponent from "./ChildComponent";

const CounterWithFunc = ({count, setCount}) => {

    return (
        <div className="border border-green-500 m-10 p-10">
            <button className="bg-gray-300 p-4" onClick={()=>setCount(prev => prev+1)}>increment</button>
            <ChildComponent count={count} />
        </div>
    );
};

export default CounterWithFunc;