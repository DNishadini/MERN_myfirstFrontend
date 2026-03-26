import { Route } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="h-full w-full bg-blue-600 flex  p-2">
      <div className="w-[300px] h-full bg-blue-600"></div>

      <div className="w-[calc(100%-300px)] h-full bg-green-400 rounded-[20px]">
        <Routes path="/">
          <Route path="/" element={<h1>Admin Dashboard</h1>} />
          <Route path="/products" element={<h1>Manage Products</h1>} />
          <Route path="/orders" element={<h1>Manage Orders</h1>} />
        </Routes>
      </div>
    </div>
  );
}
