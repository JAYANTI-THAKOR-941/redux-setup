import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const {count} = useSelector(state=>state);

    const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter App</h1>
        <div className="container">
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increase</button>
            <h2>Count:{count}</h2>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrease</button>
        </div>
    </div>
  )
}

export default Counter