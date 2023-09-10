import { DailyUsage } from "./DailyUsage";
import { Login } from "./Login";
import { OrderConfirm } from "./OrderConfirm";
import { OrderCreate } from "./OrderCreate";
import { Orders } from "./Orders";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/order_create" element={<OrderCreate />} />
        <Route path="/" element={<Login />} />
        <Route path="/order_confirm/:id" element={<OrderConfirm />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order_confirm/:id/edit" element={<OrderConfirm />} />
      </Routes>
      {/* <DailyUsage /> */}
    </div>
  );
}
