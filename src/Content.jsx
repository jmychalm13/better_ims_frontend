import { DailyUsage } from "./DailyUsage";
import { Login } from "./Login";
import { OrderConfirm } from "./OrderConfirm";
import { OrderCreate } from "./OrderCreate";
import { Routes, Route } from "react-router-dom";
import { Receipt } from "./Receipt";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/order_create" element={<OrderCreate />} />
        <Route path="/" element={<Login />} />
        <Route path="/order_confirm/:id" element={<OrderConfirm />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
      {/* <DailyUsage /> */}
    </div>
  );
}
