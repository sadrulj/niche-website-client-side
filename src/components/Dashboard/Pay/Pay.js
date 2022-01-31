import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jxz1KHRSEPxAiCHyWdwnGB4xadWrotGuTCT0zUWZLt8CSOuIWNyHJlduSlitfqOADRrZQvxleKcL83s4EmgtLHa00QPiaEbOJ"
);

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const Pay = () => {
  const { orderId } = useParams();
  const [orders, setOrders] = useState({});
  console.log(orderId);
  useEffect(() => {
    const url = `https://make-my-glasses.herokuapp.com/orders/${orderId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orderId]);
  console.log(orders);

  return (
    <div>
      <h2>Please Pay for: {orders.productCode}</h2>
      <h3>Titel: {orders.title}</h3>
      <h4>Pay: ${orders.price}</h4>
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm order={orders} />
      </Elements>
    </div>
  );
};

export default Pay;
