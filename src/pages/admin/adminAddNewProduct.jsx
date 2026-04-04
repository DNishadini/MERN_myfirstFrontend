import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[600px] h-[300px] border-accent border-[2px] flex flex-col items-center">
        <input
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={altNames} onChange={(e) => setAltNames(e.target.value)} />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => {
            setImages(e.target.files);
          }}
          multiple
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          value={labelledPrice}
          onChange={(e) => setLabelledPrice(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="cream">Cream</option>
          <option value="lotion">Lotion</option>
          <option value="serum">Serum</option>
        </select>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>
    </div>
  );
}
