import { DailyUsage } from "./DailyUsage";
import { Login } from "./Login";
import { OrderConfirm } from "./OrderConfirm";
import { UsageConfirm } from "./UsageConfirm";
import { OrderCreate } from "./OrderCreate";
import { Orders } from "./Orders";
import { Routes, Route } from "react-router-dom";
import { PieChart } from "./PieChart";

export function Content() {
  return (
    <div className="content-wrap">
      <Routes>
        <Route path="/order_create" element={<OrderCreate />} />
        <Route path="/" element={<Login />} />
        <Route path="/order_confirm/:id" element={<OrderConfirm />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order_confirm/:id/edit" element={<OrderConfirm />} />
        <Route path="/daily_usage" element={<DailyUsage />} />
        <Route path="/usage_confirm" element={<UsageConfirm />} />
        <Route path="/daily_usage_chart" element={<PieChart />} />
      </Routes>
      {/* <DailyUsage /> */}
      {/* <PieChart /> */}
    </div>
  );
}
