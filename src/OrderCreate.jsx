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

  useEffect(displayProducts, []);
  return (
    <div className="order-form">
      <form className="mt-5 pt-2 m-auto rounded">
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
          <div className="col text-center text-center amount-ordered border-bottom">
            <strong>Quantity</strong>
          </div>
        </div>
        {products.map((product) => (
          <div key={product.id} className="row">
            <div className="product-name col border-bottom-0 text-center">
              <p>{product.product_name}</p>
            </div>
            <div className="col text-center text-center uom">{product.uom}</div>
            <div className="col text-center on-hand">{product.on_hand}</div>
            <div className="col text-center">
              <input type="number" className="form-control" placeholder="Quantity" />
            </div>
          </div>
        ))}
        {/*  */}
        <div className="row">
          <p>You have placed an order for 76 cases.</p>
        </div>
      </form>
    </div>
  );
}
