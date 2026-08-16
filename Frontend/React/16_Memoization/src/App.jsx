import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home';
import About from './components/About';

const App = () => {

  console.log("App rendering...");

  const [count, setCount] = useState(0)
  const [users, setUsers] = useState({ name: "raghav", id: 10 });

  let calculations = useMemo(() => {
    console.log("calculation running...");
    let sum = 0;

    for(let i=1; i<1000000; i++) {
      sum += i;
    }

    return sum;
  }, [])

  let greet = useCallback(() => {
    console.log("Hey.. How are you?");
  }, [])
  
  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <h2>Name is {users.name}</h2>
      <h2>Sum is {calculations}</h2>

      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setUsers({ ...users, name: "raj" })}>Change Name {" "}</button>

      <Home greet={greet}/>
      <About users={users} />

    </div>
  )
}

export default App
