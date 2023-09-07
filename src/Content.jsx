import axios from "axios";
import { Login } from "./Login";
import { OrderCreate } from "./OrderCreate";

export function Content() {
  return (
    <div>
      {/* <Login /> */}
      <OrderCreate />
    </div>
  );
}
