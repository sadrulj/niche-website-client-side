import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Delete a product
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Deleted!!");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <h2>Manage Products</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                align="center"
              >
                Image URL
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                align="center"
              >
                Title
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                align="center"
              >
                Product Code
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                align="center"
              >
                Rating
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                align="center"
              >
                Price
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {product.image}
                </TableCell>
                <TableCell align="center">{product.title}</TableCell>
                <TableCell align="center">{product.productCode}</TableCell>
                <TableCell align="center">{product.rating}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  <Button
                    sx={{ bgcolor: "error.main", fontWeight: 600 }}
                    onClick={() => handleDeleteProduct(product._id)}
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

export default ManageProducts;
