import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch();
  }, []);

  return (
    <div className="w-full h-full p-[20px] bg-gray-50">
      <Link
        to="/admin/add-product"
        className="fixed right-[50px] bottom-[50px] text-5xl hover:text-accent"
      >
        <CiCirclePlus />
      </Link>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Product ID</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Labelled Price</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr
                  key={item.productID}
                  className="border-b hover:bg-gray-100 transition-all"
                >
                  <td className="py-3 px-6 text-center">
                    <img
                      src={
                        item.image && item.image.length > 0
                          ? item.image[0]
                          : "/default-image.jpg"
                      }
                      alt={item.name}
                      className="w-16 h-16 object-cover mx-auto rounded-md"
                    />
                  </td>
                  <td className="py-3 px-6">{item.productID}</td>
                  <td className="py-3 px-6">{item.name}</td>
                  <td className="py-3 px-6">{item.price}</td>
                  <td className="py-3 px-6">{item.labeledPrice}</td>
                  <td className="py-3 px-6">{item.category}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center gap-4">
                      <FaRegTrashCan className="text-xl text-red-500 hover:text-red-700 cursor-pointer transition-all" />
                      <FaRegEdit className="text-xl text-accent hover:text-yellow-600 cursor-pointer transition-all" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
