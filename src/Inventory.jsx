import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function Inventory() {
  const [products, setProducts] = useState([]);

  const displayProducts = () => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(displayProducts, []);

  return (
    <div className="inventory">
      <h1 className="text-center m-3">Inventory</h1>
      <div className="table-responsive d-flex justify-content-center">
        <table style={{ borderRadius: "5px", overflow: "hidden" }} className="table border border-black table-striped">
          <thead className="bg-none">
            <tr className="text-white">
              <th>Product Name</th>
              <th>UOM</th>
              <th>ON-HAND</th>
            </tr>
          </thead>
          <tbody className="text-95 text-secondary-d3">
            {products.map((product) => (
              <tr className="" key={product.id}>
                <td>{product.product_name}</td>
                <td className="td-number">{product.uom}</td>
                <td className="td-number">{product.on_hand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
