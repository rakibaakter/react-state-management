
// import { useState } from 'react'
import './App.css'
import UserInfoWithUseReducer from './component/UserInfoWithUseReducer'
// import CounterWithClass from './component/CounterWIthClass'
// import CounterWithFunc from './component/CounterWithFunc'
// import UserInfoWithState from './component/UserInfoWithState'


function App() {

  // const [count, setCount] = useState(0)


  return (
    <div className='border border-blue-600 m-10 p-10'>
       
      {/* {count} */}
      {/* <CounterWithClass/> */}
      {/* <CounterWithFunc count={count} setCount={setCount}/> */}
      {/* <UserInfoWithState/> */}
      <UserInfoWithUseReducer/>
    </div>
  )
}

export default App
