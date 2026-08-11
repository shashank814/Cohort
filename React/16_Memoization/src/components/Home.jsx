import React from 'react'

const Home = React.memo(({count, greet}) => {

  greet()
    console.log("Home rendering...");
    
  return (
    <div>
      <h1>Home</h1>
      <h2>Count is {count}</h2>
    </div>
  )
})

export default Home
