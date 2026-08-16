import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../app/store'
import { decrement, increment, incrementByValue } from '../features/counterSlice'

const HomePage = () => {

  const [inpValue, setInpValue] = useState(0)
  
    let dispatch = useDispatch()
    let { count } = useSelector((store) => store.counter)
    
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button> <br /> <br />
      <input
        type="text"
        placeholder="Enter count"
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByValue(inpValue))}>
        Add to count
      </button>
    </div>
  );
};

export default HomePage;
