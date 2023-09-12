import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function DailyUsage() {
  const [products, setProducts] = useState([]);
  const [productsToDeduct, updateProductsToDeduct] = useState({});

  const displayProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios patch request
    axios.post("http://localhost:3000/daily_usages.json", { products: productsToDeduct }).then((response) => {
      // window.location.href = "/order_confirm/" + response.data.id;
      console.log(response);
    });
    // productsToDecuct is data
  };

  const handleProductsToDeduct = (id, value) => {
    const data = productsToDeduct;
    data[id] = value;
    updateProductsToDeduct(data);
    // instead of new FormData send productsToDeduct to backend (see orderCreate)

    console.log(id, value);
  };

  useEffect(displayProducts, []);

  return (
    <div>
      <div className="daily_usage_form">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center m-3">Daily Usage</h1>
          <div className="table-responsive d-flex justify-content-center">
            <table
              style={{ borderRadius: "5px", overflow: "hidden" }}
              className="table border border-black table-striped"
            >
              <thead className="bg-none">
                <tr className="text-white">
                  <th>Product Name</th>
                  <th>Daily Usage</th>
                </tr>
              </thead>
              <tbody className="text-95 text-secondary-d3">
                {products.map((product) => (
                  <tr className="" key={product.id}>
                    <td>{product.product_name}</td>
                    <td>
                      <input
                        name={"quantity" + product.id}
                        type="number"
                        className="form-control"
                        placeholder="0"
                        onChange={(event) => handleProductsToDeduct(product.id, event.target.value)}
                        max={50}
                        min={0}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn">
              Deduct Products
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
