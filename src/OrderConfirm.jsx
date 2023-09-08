import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function OrderConfirm() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const getCurrentOrder = () => {
    axios
      .get("http://localhost:3000/orders/11.json")
      .then((response) => {
        var products = response.data.products;
        var info = [];
        products.forEach((product) => {
          response.data.product_orders.forEach((product_order) => {
            if (product.id === product_order.product_id) {
              console.log(product.product_name, product_order.quantity_shipped);
              info.push({
                product_name: product.product_name,
                quantity: product_order.quantity_shipped,
              });
            }
          });
        });
        setCurrentProducts(info);
        // console.log(currentOrder);
        setCurrentOrder(response.data);
      })
      .catch(() => {
        console.log("Error");
      });
  };
  useEffect(getCurrentOrder, []);

  return (
    <div>
      <h1>Order Confirmed</h1>
      <div className="table-responsive">
        <table className="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
          <thead className="bg-none bgc-default-tp1">
            <tr className="text-white">
              <th className="opacity-2">#</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th width="140">Amount</th>
            </tr>
          </thead>
          <tbody className="text-95 text-secondary-d3">
            <tr></tr>
            {currentProducts.map((product) => (
              <tr key={product.product_name}>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {currentProducts.map((product) => (
        <div key={product.product_name}>
          <p>{product.product_name}</p>
          <p>{product.quantity}</p>
        </div>
      ))} */}
    </div>
  );
}
