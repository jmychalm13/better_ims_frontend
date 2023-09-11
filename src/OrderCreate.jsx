import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function OrderCreate() {
  const [products, setProducts] = useState([]);

  const [productsToOrder, setProductsToOrder] = useState({});

  const displayProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const params = new FormData(event.target);
    axios.post("http://localhost:3000/orders.json", { order: productsToOrder }).then((response) => {
      window.location.href = "/order_confirm/" + response.data.id;
    });
  };

  const updateProductsToOrder = (id, quantity) => {
    var testVar = productsToOrder;
    testVar[id] = quantity;
    setProductsToOrder(testVar);
  };

  useEffect(displayProducts, []);
  return (
    <div className="order-form">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center m-3">Create Order</h1>
        <div className="table-responsive d-flex justify-content-center">
          <table
            style={{ borderRadius: "5px", overflow: "hidden" }}
            className="table border border-black table-striped"
          >
            <thead className="bg-none">
              <tr className="text-white">
                <th>Product Name</th>
                <th>UOM</th>
                <th>ON-HAND</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="text-95 text-secondary-d3">
              {products.map((product) => (
                <tr className="" key={product.id}>
                  <td>{product.product_name}</td>
                  <td className="td-number">{product.uom}</td>
                  <td className="td-number">{product.on_hand}</td>
                  <td>
                    <input
                      name={"quantity" + product.id}
                      type="number"
                      className="form-control"
                      placeholder="0"
                      onChange={(event) => updateProductsToOrder(product.id, event.target.value)}
                      max={50}
                      min={0}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
