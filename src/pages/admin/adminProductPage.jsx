import axios from "axios";
import { useState } from "react";

const sampleData = [
  {
    productID: "P001",
    name: "Smartphone",
    description: "Latest model with 128GB storage, 6GB RAM, and a 48MP camera.",
    altNames: ["Mobile", "Cell Phone", "Smart Device"],
    price: 499.99,
    labeledPrice: 599.99,
    images: [
      "https://example.com/images/smartphone1.jpg",
      "https://example.com/images/smartphone2.jpg",
    ],
    category: "Electronics",
  },
  {
    productID: "P002",
    name: "Laptop",
    description:
      "14-inch laptop with an Intel i7 processor, 16GB RAM, and a 512GB SSD.",
    altNames: ["Notebook", "Computer", "Laptop Computer"],
    price: 899.99,
    labeledPrice: 999.99,
    images: [
      "https://example.com/images/laptop1.jpg",
      "https://example.com/images/laptop2.jpg",
    ],
    category: "Electronics",
  },
  {
    productID: "P003",
    name: "Wireless Headphones",
    description:
      "Noise-canceling over-ear headphones with 20 hours of battery life.",
    altNames: ["Bluetooth Headphones", "Headset", "Earphones"],
    price: 129.99,
    labeledPrice: 149.99,
    images: [
      "https://example.com/images/headphones1.jpg",
      "https://example.com/images/headphones2.jpg",
    ],
    category: "Audio",
  },
  {
    productID: "P004",
    name: "Smart Watch",
    description:
      "Water-resistant smartwatch with fitness tracking, heart rate monitoring, and GPS.",
    altNames: ["Wrist Watch", "Fitness Watch", "Smart Band"],
    price: 199.99,
    labeledPrice: 249.99,
    images: [
      "https://example.com/images/smartwatch1.jpg",
      "https://example.com/images/smartwatch2.jpg",
    ],
    category: "Wearables",
  },
  {
    productID: "P005",
    name: "Air Purifier",
    description:
      "HEPA filter air purifier with three fan speeds and quiet operation.",
    altNames: ["Air Cleaner", "Air Filter", "Air Cleaner Device"],
    price: 149.99,
    labeledPrice: 179.99,
    images: [
      "https://example.com/images/airpurifier1.jpg",
      "https://example.com/images/airpurifier2.jpg",
    ],
    category: "Home Appliances",
  },
];

export default function AdminProductPage() {
  const [products, setProducts] = useState(sampleData);
  //   axios
  //     .get(import.meta.env.VITE_API_URL + "/api/products")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch();
  return (
    <div className="w-full h-full p-[10px]">
      <table className="border">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Labelled Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
