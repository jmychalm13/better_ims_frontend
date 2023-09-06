import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function OrderCreate() {
  const [products, setProducts] = useState([]);

  const displayProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(displayProducts, []);
  return (
    <div className="order-form">
      <form onSubmit={handleSubmit} className="form-order mt-5 p-2 m-auto rounded">
        <h1 className="text-center">Create Order</h1>
        <div className="header-row row">
          <div className="text-center col border-bottom text-center product-name">
            <strong>Product Name</strong>
          </div>
          <div className="col text-center text-center uom border-bottom">
            <strong>UOM</strong>
          </div>
          <div className="col text-center text-center on-hand border-bottom">
            <strong>ON-HAND</strong>
          </div>
          <div className="col text-center text-center amount-ordered">
            <strong>Quantity</strong>
          </div>
        </div>
        {products.map((product) => (
          <div key={product.id} className="row">
            <div className="border product-name col text-center">
              <p>{product.product_name}</p>
            </div>
            <div className="border col text-center text-center uom">{product.uom}</div>
            <div className="border col text-center on-hand">{product.on_hand}</div>
            <div className="col text-center">
              <input type="number" className="form-control" placeholder="Quantity" />
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn border">
            Place Order
          </button>
        </div>
        {/* <div className="row">
          <p>You have placed an order for 76 cases.</p>
        </div> */}
      </form>
    </div>
  );
}
