import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1787242184238-a7713decb1ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            caption: "Picture 1"
        }
    ])

    useEffect(() => {

        axios.get("http://localhost:3000/posts").then((res) => {
            setPosts(res.data.posts)
        })

    }, [])

  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id}
                    className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )
        }
    </section>
  )
}

export default Feed
