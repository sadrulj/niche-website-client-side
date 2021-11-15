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

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Deleted!!");
            const remainingProducts = orders.filter(
              (order) => order._id !== id
            );
            setOrders(remainingProducts);
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
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Action</TableCell>
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
