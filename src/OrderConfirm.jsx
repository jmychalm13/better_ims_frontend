import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function OrderConfirm() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const params = useParams();
  const location = useLocation();
  const [received, updateReceived] = useState(false);
  const inlineStyles = {
    borderRadius: "30px",
  };

  const getCurrentOrder = () => {
    console.log(location);
    axios
      .get(`http://localhost:3000/orders/${params.id}.json`)
      .then((response) => {
        var products = response.data.products;
        var info = [];
        if (location.pathname.includes("edit")) {
          console.log("I ran");
          updateReceived(true);
        }
        products.forEach((product) => {
          response.data.product_orders.forEach((product_order) => {
            if (product.id === product_order.product_id) {
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
      <h1 className="text-center m-3">Order Confirmed</h1>
      <div className="table-responsive d-flex justify-content-center">
        <table className="table border border-black table-striped">
          <thead style={inlineStyles} className="bg-none">
            <tr className="text-white">
              <th>#</th>
              <th>Product Name</th>
              <th>Qty</th>
              {received ? <th>Received</th> : <></>}
            </tr>
          </thead>
          <tbody className="text-95 text-secondary-d3">
            {currentProducts.map((product, index) => (
              <tr key={product.product_name}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                {received ? <td>8</td> : <></>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
