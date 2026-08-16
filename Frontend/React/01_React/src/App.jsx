import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [complete, setComplete] = useState(false)

  const handleAdd = () => {
    if(input.trim() === "") return

    setTodos([...todos, input]) // add new todo
    setInput("") // clear input
  }

  const handleDelete = (index) => {
  const updated = todos.filter((item, i) => {
    if (i !== index) {
      return true   // keep it
    } else {
      return false  // remove it
    }
  })

    setTodos(updated)
  }

  return (
    <div className='h-screen flex justify-center items-center bg-black'>
      <div className='bg-blue-800 h-[500px] w-2/3 px-10'>

        <h1 className='text-white text-3xl font-bold flex justify-center mt-3'>
          Todo App
        </h1>

        <div className='bg-white mt-4 text-xl flex justify-between rounded-xl'>
          
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder='Add a todo'
            className='px-2 py-2 flex-1 outline-none'
          />

          <button 
            onClick={handleAdd}
            className='bg-violet-700 py-2 px-3 rounded-xl text-white'
          >
            Add Todo
          </button>

        </div>

        {/* Todo List */}
        <div className='mt-6'>
          {
            todos.map((task, index) => (
              <div key={index} className='text-white mt-2 flex justify-between'>
                <h1 className='font-medium text-xl'>{task}</h1>

                <div className='flex gap-3'>
                    <button className='bg-red-600 px-3 py-1 rounded-xl' onClick={() => handleDelete(index)}>Delete</button>

                <button onClick={() => setComplete(!complete)} className='bg-green-600 px-3 py-1 rounded-xl'>
                  {complete ? <p>Completed</p> : <p>Complete</p>}
                </button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App