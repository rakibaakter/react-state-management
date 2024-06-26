
// import { useState } from 'react'
import './App.css'
import UserInfoWithUseReducer from './component/UserInfoWithUseReducer'
import ToDoForm from './component/todo/ToDoForm'
import TodoList from './component/todo/TodoList'
import TodoProvider from './context/TodoProvider'
// import CounterWithClass from './component/CounterWIthClass'
// import CounterWithFunc from './component/CounterWithFunc'
// import UserInfoWithState from './component/UserInfoWithState'


function App() {

  // const [count, setCount] = useState(0)


  return (
    <TodoProvider>
     <div className='border border-blue-600 m-10 p-10'>
       
       {/* {count} */}
       {/* <CounterWithClass/> */}
       {/* <CounterWithFunc count={count} setCount={setCount}/> */}
       {/* <UserInfoWithState/> */}
       {/* //   <UserInfoWithUseReducer/> */}
       
       <ToDoForm/>
       <TodoList/>
     </div>

    </TodoProvider>
  )
}

export default App
