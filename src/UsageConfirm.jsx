import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function UsageConfirm() {
  const [currentProducts, getCurrentProducts] = useState([]);
  const params = useParams();

  let products = [];
  const getCurrentUsage = () => {
    axios.get(`http://localhost:3000/daily_usages.json`).then((response) => {
      let items = response.data;
      items.forEach((product) => {
        products.push(product.product);
      });
      getCurrentProducts(products);
    });
  };
  console.log(currentProducts);
  useEffect(getCurrentUsage, []);

  return (
    <div>
      {currentProducts.map((product) => (
        <p key={product.id}>{product.product_name}</p>
      ))}
    </div>
  );
}
