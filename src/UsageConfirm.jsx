import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function UsageConfirm() {
  const [currentProducts, getCurrentProducts] = useState([]);

  let products = [];
  const getCurrentUsage = () => {
    axios.get(`http://localhost:3000/daily_usages.json`).then((response) => {
      let items = response.data;
      items.forEach((product) => {
        products.push(product);
      });
      getCurrentProducts(products);
    });
  };
  console.log(currentProducts);
  useEffect(getCurrentUsage, []);

  return (
    <form className="confirm-form">
      <h1 className="text-center m-3">Usage Confirmed</h1>
      <div className="table-responsive d-flex justify-content-center">
        <table style={{ borderRadius: "5px", overflow: "hidden" }} className="table border border-black table-striped">
          <thead className="bg-none">
            <tr className="text-white">
              <th>#</th>
              <th>Product Name</th>
              <th>Qty Used</th>
            </tr>
          </thead>
          <tbody className="text-95 text-secondary-d3">
            {currentProducts.map((product, index) => (
              <tr key={product.product.product_name}>
                <td>{index + 1}</td>
                <td>{product.product.product_name}</td>
                <td>{product.quantity_used}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}
