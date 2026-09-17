import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [urls, setUrls] = useState([])
  const [inpVal, setInpVal] = useState("")
  const [currentVal, setCurrentVal] = useState(null)

  async function fetchUrls() {
    const res = await axios.get("http://localhost:5173/api/url/get")
    setUrls(res.data.data.urls)
  }

  async function createShortUrl() {
    const res = await axios.post("http://localhost:5173/api/url", {
      url: inpVal
    })

    setCurrentVal({
      originalUrl: res.data.data.originalUrl,
      shortCode: res.data.data.shortCode
    })

    fetchUrls()
  }

  async function deleteUrl(id) {
    await axios.delete(`http://localhost:5173/api/url/delete/${id}`)
    fetchUrls()
  }

  useEffect(() => {
    fetchUrls()
  }, [])

  return (
    <main className='p-10 flex flex-col gap-6 items-center'>
      
      {/* Input */}
      <div className='w-full max-w-4xl p-2 flex gap-2'>
        <input
          type="text"
          value={inpVal}
          placeholder='Enter Long URL'
          onChange={(e) => setInpVal(e.target.value)}
          className='border rounded w-full p-2 outline-none'
        />
        <button
          onClick={createShortUrl}
          className='rounded px-4 py-2 bg-orange-600 text-white cursor-pointer'>
          Shorten
        </button>
      </div>

      {/* List */}
      <div className='w-full max-w-4xl flex flex-col gap-3'>
        {
          urls.map(url => {
            return (
              <div
                key={url._id}
                className='border border-neutral-200 p-3 flex justify-between items-center rounded shadow-sm'
              >

                {/* Short URL (clickable) */}
                <a
                  href={`http://localhost:3000/${url.shortCode}`}
                  target='_blank'
                  className='text-blue-600 underline w-1/3 truncate'
                >
                  {`localhost:3000/${url.shortCode}`}
                </a>

                {/* Original URL */}
                <p className='w-1/3 truncate text-gray-700'>
                  {url.originalUrl}
                </p>

                {/* Clicks */}
                <p className='w-1/6 text-center'>
                  {url.clicks}
                </p>

                {/* Actions */}
                <div className='flex gap-2'>
                  <button className='px-3 py-1 rounded bg-orange-500 text-white'>
                    COPY
                  </button>

                  <button
                    onClick={() => deleteUrl(url._id)}
                    className='px-3 py-1 rounded bg-red-500 text-white'>
                    DELETE
                  </button>
                </div>

              </div>
            )
          })
        }
      </div>

    </main>
  )
}

export default App