import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaUpload from "../../utils/mediaUpload";

export default function AdminAddNewProduct() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [altNames, setAltNames] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("cream");
  const [images, setImages] = useState([]);
  const [labelledPrice, setLabelledPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  async function addProducts() {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/login");
      return;
    }

    const promises = [];
    for (let i = 0; i < images.length; i++) {
      promises[i] = MediaUpload(images[i]);
    }
  }
  return (
    <div className="w-full h-full flex justify-center items-center bg-primary p-8">
      <div className="w-full max-w-[650px] bg-white rounded-3xl shadow-xl p-8 space-y-6 border-2 border-accent overflow-y-auto max-h-screen">
        <h2 className="text-3xl font-semibold text-center text-accent mb-6">
          Add New Product
        </h2>

        <div className="space-y-6">
          {/* Product ID */}
          <div>
            <label
              htmlFor="productId"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Product ID
            </label>
            <input
              id="productId"
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter product ID"
            />
          </div>

          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Product Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter product name"
            />
          </div>

          {/* Alternative Names */}
          <div>
            <label
              htmlFor="altNames"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Alternative Names
            </label>
            <input
              id="altNames"
              type="text"
              value={altNames}
              onChange={(e) => setAltNames(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter alternative names"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter product description"
            />
          </div>

          {/* Images Upload */}
          <div>
            <label
              htmlFor="images"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Upload Images
            </label>
            <input
              id="images"
              type="file"
              onChange={(e) => setImages(e.target.files)}
              multiple
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter product price"
            />
          </div>

          {/* Labelled Price */}
          <div>
            <label
              htmlFor="labelledPrice"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Labelled Price
            </label>
            <input
              id="labelledPrice"
              type="number"
              value={labelledPrice}
              onChange={(e) => setLabelledPrice(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter labelled price"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
            >
              <option value="cream">Cream</option>
              <option value="lotion">Lotion</option>
              <option value="serum">Serum</option>
            </select>
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-lg font-medium text-secondary mb-2"
            >
              Stock
            </label>
            <input
              id="stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full p-4 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 placeholder:text-secondary transition-all"
              placeholder="Enter stock quantity"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-8 space-x-6">
          <button
            onClick={addProducts}
            className="w-full py-3 bg-accent text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all transform hover:scale-105"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/admin/products")}
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all transform hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
