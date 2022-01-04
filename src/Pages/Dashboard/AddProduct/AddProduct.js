import React, { useRef } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const nameRef = useRef();
  const imgRef = useRef();
  const priceRef = useRef();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const price = priceRef.current.value;

    const newProduct = { name, img, price };
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1>Add a Product</h1>
      <form onSubmit={handleAddProduct}>
        <input
          className="input-field"
          type="text"
          placeholder=" Name"
          ref={nameRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Image URL"
          ref={imgRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Price"
          ref={priceRef}
        />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProduct;
