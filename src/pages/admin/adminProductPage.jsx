import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";

function ProductDeleteConfirm(props) {
  const productID = props.productId;
  const close = props.close;
  const refresh = props.refresh;

  function deleteProduct() {
    const token = localStorage.getItem("token");
    axios
      .delete(import.meta.env.VITE_API_URL + "/api/products/" + productID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        close();
        toast.success("Product deleted successfully!");
        refresh();
      })
      .catch((error) => {
        console.error("There was an error deleting the product!", error);
      });
  }

  return (
    <div className="fixed left-0 top-0 w-full h-screen bg-[#00000050] z-[100] flex justify-center items-center">
      <div className="w-[500px] h-[200px] bg-primary relative flex flex-col justify-center items-center gap-[40px] rounded-lg shadow-lg p-4">
        <button
          onClick={close}
          className="absolute right-[-42px] top-[-42px] w-[40px] h-[40px] bg-red-600 rounded-full text-white flex justify-center items-center font-bold border border-red-600 hover:bg-white hover:text-red-600"
        >
          X
        </button>
        <p className="text-xl font-simibold">
          Are you sure you want to delete this product with product ID:
          {productID}?
        </p>
        <div className="flex gap-[40px]">
          <button
            onclick={close}
            className="w-[100px] bg-blue-600 p-[5px] text-white hover:bg-accent"
          >
            Cancel
          </button>
          <button
            onClick={deleteProduct}
            className="w-[70px] bg-red-600 p-[5px] text-white hover:bg-accent"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      axios
        .get(import.meta.env.VITE_API_URL + "/api/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  return (
    <div className="w-full h-full p-[20px] bg-gray-50">
      {isDeleteConfirmVisible && (
        <ProductDeleteConfirm
          refresh={() => setIsLoading(true)}
          productId={productToDelete}
          close={() => {
            setIsDeleteConfirmVisible(false);
          }}
        />
      )}
      <Link
        to="/admin/add-product"
        className="fixed right-[50px] bottom-[50px] text-5xl hover:text-accent"
      >
        <CiCirclePlus />
      </Link>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        {isLoading ? (
          <Loader />
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Product ID</th>
                <th className="py-3 px-6 text-left">Product Name</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Labelled Price</th>
                <th className="py-3 px-6 text-left">Stock</th>
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
                    <td className="py-3 px-6">{item.stock}</td>
                    <td className="py-3 px-6">{item.category}</td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center gap-4">
                        <FaRegTrashCan
                          className="text-xl text-red-500 hover:text-red-700 cursor-pointer transition-all"
                          onClick={() => {
                            setProductToDelete(item.productID);
                            setIsDeleteConfirmVisible(true);
                          }}
                        />
                        <FaRegEdit
                          className="text-xl text-accent hover:text-yellow-600 cursor-pointer transition-all"
                          onClick={() => {
                            navigate("/admin/update-product", {
                              state: item,
                            });
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
