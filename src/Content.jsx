import { Login } from "./Login";
import { OrderCreate } from "./OrderCreate";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/order_create" element={<OrderCreate />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
