import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Comp4 = () => {
    let cd = useContext(MyStore);
    console.log(cd);
    
  return (
    <div>
      <h1>Comp4</h1>
    </div>
  )
}

export default Comp4
