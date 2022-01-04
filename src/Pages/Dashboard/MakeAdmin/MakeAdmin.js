import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Admin added successfully");
          setSuccess(true);
        } else {
          alert("Already Added as an Admin");
        }
      });
    e.target.reset();
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
          sx={{ width: "50%", mb: 3 }}
        />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Added to admin role</Alert>}
    </div>
  );
};

export default MakeAdmin;
