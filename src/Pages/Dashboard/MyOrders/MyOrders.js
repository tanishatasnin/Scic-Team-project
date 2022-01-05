import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import './MyOrders.css'
const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [customers, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://boiling-forest-63211.herokuapp.com/customers/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email, customers]);

  const handleDeleteCustomer = _id => {
    const url = `https://boiling-forest-63211.herokuapp.com/customers/${_id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("DELETED");
        const remaining = customers.filter(customer => customer._id !== _id);
        setProducts(remaining);
      })
  }


  return (

    <div className="tabil-body">
      <br /><br /><br />
      <h2>My orders: {myOrders.length}</h2>
      <TableContainer component={Paper} >
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Product</TableCell>
              <TableCell align="right">Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {myOrders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.customerName}
                </TableCell>
                <TableCell align="right">{row.customerEmail}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <button className='button-manage' onClick={() => handleDeleteCustomer(row._id)}>Delete</button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
