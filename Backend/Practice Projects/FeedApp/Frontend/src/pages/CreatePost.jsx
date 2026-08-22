import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CreatePost = () => {

    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
      );
      navigate("/feed")

      console.log(res);
    } catch (err) {
      console.log(err);
      alert("error creating post");
    }
  };
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
