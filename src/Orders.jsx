import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Orders() {
  const [orders, setOrders] = useState([]);

  const displayOrders = () => {
    axios.get("http://localhost:3000/orders.json").then((response) => {
      setOrders(response.data);
    });
  };

  useEffect(displayOrders, []);

  return (
    <div>
      <h1 className="text-center pt-2">View Orders</h1>
      <div className="table-responsive d-flex justify-content-center">
        <table
          style={{ borderRadius: "5px", overflow: "hidden" }}
          className="rounded table border border-black table-striped"
        >
          <thead className="bg-none">
            <tr className="text-white">
              <th>#</th>
              <th>Date Placed</th>
              <th>Date Received</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-95 text-secondary-d3">
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.friendly_date_placed}</td>
                  <td>{!order.friendly_date_received ? "Not Received" : order.friendly_date_received}</td>
                  <td>
                    <Link to={`/order_confirm/${order.id}/edit`}>edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

{
  /*  */
}
