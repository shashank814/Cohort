import React, { useEffect, useState } from 'react'
import Contact from './Contact';

const About = () => {
  let [toggle, setToggle] = useState(false)

    let inetrval = setInterval(() => {
      console.log("hey i am in about");
    }, 1000)

    useEffect(() => {
      console.log("About rendering");

      return () => {
        clearInterval(inetrval)
        console.log("i am triggered because about ja hai");
      }
    }, [])

  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default About
