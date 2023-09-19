import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function OrderConfirm() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const params = useParams();
  const location = useLocation();
  const [received, updateReceived] = useState(false);

  const getCurrentOrder = () => {
    console.log(location);
    axios
      .get(`/orders/${params.id}.json`)
      .then((response) => {
        var products = response.data.products;
        var info = [];
        if (location.pathname.includes("edit")) {
          updateReceived(true);
        }
        products.forEach((product) => {
          response.data.product_orders.forEach((product_order) => {
            if (product.id === product_order.product_id) {
              info.push({
                product_name: product.product_name,
                quantity: product_order.quantity_shipped,
                id: product_order.id,
                received: product_order.quantity_received || product_order.quantity_shipped,
              });
            }
          });
        });
        setCurrentProducts(info);
        // console.log(currentOrder);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("I ran");
    const data = new FormData(event.target);
    axios.patch(`/orders/${params.id}.json`, data).then((response) => {
      window.location.href = "/orders";
    });
  };

  useEffect(getCurrentOrder, []);

  return (
    <form className="confirm-form" onSubmit={handleSubmit}>
      <h1 className="text-center m-3">Order Confirmed</h1>
      <div className="table-responsive d-flex justify-content-center">
        <table style={{ borderRadius: "5px", overflow: "hidden" }} className="table border border-black table-striped">
          <thead className="bg-none">
            <tr className="text-white">
              <th>#</th>
              <th>Product Name</th>
              <th>Qty Shipped</th>
              {received ? <th>Received</th> : <></>}
            </tr>
          </thead>
          <tbody className="text-95 text-secondary-d3">
            {currentProducts.map((product, index) => (
              <tr key={product.product_name}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                {received ? (
                  <td>
                    <input
                      type="number"
                      name={product.id}
                      placeholder={product.received}
                      defaultValue={product.received}
                    />
                  </td>
                ) : (
                  <></>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        {received ? (
          <button className="btn" type="submit">
            Receive Order
          </button>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
}
