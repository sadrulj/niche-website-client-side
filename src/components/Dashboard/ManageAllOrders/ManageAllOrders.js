import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://obscure-temple-56874.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  //Delete a product
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
            const remainingProducts = allOrders.filter(
              (product) => product.id !== id
            );
            setAllOrders(remainingProducts);
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
            {allOrders.map((allOrder) => (
              <TableRow
                key={allOrder._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={allOrder.image}
                    alt=""
                    width="100px"
                    height="100px"
                  />
                </TableCell>
                <TableCell align="center">{allOrder.productCode}</TableCell>
                <TableCell align="right">{allOrder.price}</TableCell>
                <TableCell align="right">{allOrder.email}</TableCell>
                <TableCell align="right">
                  <Button variant="contained">status</Button>
                  <Button
                    onClick={() => handleDelete(allOrder._id)}
                    sx={{ color: "error.main", fontWeight: 600 }}
                    variant=""
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

export default ManageAllOrders;
