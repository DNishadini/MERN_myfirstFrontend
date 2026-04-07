import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MediaUpload from "../../utils/mediaUpload";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminUpdateProduct() {
  const location = useLocation();
  const [productId, setProductId] = useState(location.state.productID);
  const [name, setName] = useState(location.state.name);
  const [altNames, setAltNames] = useState(location.state.altNames.join(","));
  const [description, setDescription] = useState(location.state.description);
  const [price, setPrice] = useState(location.state.price);
  const [category, setCategory] = useState(location.state.category);
  const [images, setImages] = useState([]);
  const [labelledPrice, setLabelledPrice] = useState(
    location.state.labeledPrice,
  );
  const [stock, setStock] = useState(location.state.stock);
  const navigate = useNavigate();

  async function updateProducts() {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/login");
      return;
    }

    const promises = [];
    for (let i = 0; i < images.length; i++) {
      promises[i] = MediaUpload(images[i]);
    }
    try {
      let urls = await Promise.all(promises);
      if (urls.length === 0) {
        urls = location.state.images;
      }
      const alternativeNames = altNames.split(",");
      const product = {
        productID: productId,
        name: name,
        altNames: alternativeNames,
        description: description,
        price: price,
        labeledPrice: labelledPrice,
        stock: stock,
        images: urls,
        category: category,
      };
      await axios.put(
        import.meta.env.VITE_API_URL + "/api/products" + productId,
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );
      toast.success("Product updated successfully!");
      navigate("/admin/products");
    } catch {
      toast.error("Image upload failed. Please try again.");
    }
  }
  return (
    <div className="w-full h-full flex justify-center items-center bg-primary p-8">
      <div className="w-full max-w-[650px] bg-white rounded-3xl shadow-xl p-8 space-y-6 border-2 border-accent overflow-y-auto max-h-screen">
        <h2 className="text-3xl font-semibold text-center text-accent mb-6">
          Update Product
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
              disabled
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
            onClick={updateProducts}
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
