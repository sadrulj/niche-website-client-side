import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Rating } from "@mui/material";

const ManageProducts = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://make-my-glasses.herokuapp.com/reviews/")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  //Delete a product
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://make-my-glasses.herokuapp.com/reviews/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Deleted!!");
            const remainingReviews = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReviews);
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
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => (
              <TableRow
                key={review._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Avatar
                    alt=""
                    src={review.image}
                    sx={{
                      width: 76,
                      height: 76,
                      mx: "auto",
                      mt: 2,
                    }}
                  />
                </TableCell>
                <TableCell align="center">{review.displayName}</TableCell>
                <TableCell align="center">
                  <Rating
                    name="read-only"
                    value={review.rating}
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
                <TableCell align="center">{review.comment}</TableCell>
                <TableCell align="center">
                  <Button
                    sx={{ bgcolor: "error.main", fontWeight: 600 }}
                    onClick={() => handleDelete(review._id)}
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
