import React, { useRef } from "react";
import "./AddReview.css";

const AddReview = () => {
  const nameRef = useRef();
  const imgRef = useRef();
  const starRef = useRef();
  const messageRef = useRef();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const star = starRef.current.value;
    const message = messageRef.current.value;

    const newReview = { name, img, star, message };
    fetch("https://nameless-forest-32415.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1>Give Your Review</h1>
      <form onSubmit={handleAddProduct}>
        <input
          className="input-field"
          type="text"
          placeholder="Your Name"
          ref={nameRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder="Your Image URL"
          ref={imgRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Star Out of 5"
          ref={starRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Your Message"
          ref={messageRef}
        />
        <br />
        <input className="btn-grad" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddReview;
