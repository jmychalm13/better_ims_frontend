import { DailyUsage } from "./DailyUsage";
import { Login } from "./Login";
import { OrderConfirm } from "./OrderConfirm";
import { OrderCreate } from "./OrderCreate";
import { Routes, Route } from "react-router-dom";

export function Content() {
  return (
    <div>
      {/* <Routes>
        <Route path="/order_create" element={<OrderCreate />} />
        <Route path="/" element={<Login />} />
      </Routes> */}
      <OrderConfirm />
      {/* <DailyUsage /> */}
    </div>
  );
}
