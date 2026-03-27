import axios from "axios";
import { useState } from "react";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  //   axios
  //     .get(import.meta.env.VITE_API_URL + "/api/products")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch();
  return <div className="w-full h-full ">Sample Product</div>;
}
