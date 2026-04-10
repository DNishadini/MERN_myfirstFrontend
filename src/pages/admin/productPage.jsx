import { useState } from "react";

export default function productPage() {
  const [products, setProducts] = useState([]);

  return (
    <div className="w-full h-[calc(100vh-100px)] ">Basic Product Page</div>
  );
}
