import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    const url = `https://obscure-temple-56874.herokuapp.com/orders/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://obscure-temple-56874.herokuapp.com/orders/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully Deleted!!");
            const remainingOrders = orders.filter((order) => order.id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="center">Product Code</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={order.image} alt="" width="100px" height="100px" />
                </TableCell>
                <TableCell align="center">{order.productCode}</TableCell>
                <TableCell align="right">{order.price}</TableCell>
                <TableCell align="right">{order.email}</TableCell>
                <TableCell align="right">
                  {order.pay ? (
                    "Paid"
                  ) : (
                    <Link to={`/dashboard/pay/${order._id}`}>
                      <Button variant="contained">Pay</Button>
                    </Link>
                  )}
                  <Button
                    onClick={() => handleDelete(order._id)}
                    variant="contained"
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
