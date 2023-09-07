import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function OrderConfirm() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [currrentProducts, setCurrentProducts] = useState([]);

  const getCurrentOrder = () => {
    axios
      .get("http://localhost:3000/orders/11.json")
      .then((response) => {
        // var products = response.data.products;
        setCurrentOrder(response.data.products);
      })
      .catch(() => {
        console.log("Error");
      });
  };
  useEffect(getCurrentOrder, []);

  return (
    <div>
      {currentOrder.map((order) => (
        <p key={order.id}>{order.product_name}</p>
      ))}
    </div>
  );
}
