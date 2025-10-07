import axios from 'axios';
import { motion } from "framer-motion";
import { Trash } from "lucide-react";
import toast from 'react-hot-toast';

const ViewProducts = ({allProductsData,onDelete}) => {
  const handleClick = async (id) => {
    console.log(id);
    const response = await axios.delete(`${process.env.BASE_URL}/api/products/${id}`);
    console.log(response);
    toast.success("Product deleted successfully");
    onDelete(id);

  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
    Product Catalog
    </h1>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {allProductsData && allProductsData.map((product) => (
    <motion.div
    key={product.productId}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 200 }}
    >
    <div className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white h-full flex flex-col justify-between">
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="w-full h-40 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-gray-100">
  <img
    src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20250109/qUJA/677fd2ef663dbe1c5fc93c2d/-1117Wx1400H-4937118620-multi-MODEL11.jpg"
    alt="Product"
    className="h-full w-full object-cover"
  />
</div>



    <h2 className="text-xl font-semibold text-gray-800 mb-2">
    {product.productName}
    </h2>
    <p className="text-gray-600 text-sm mb-4 flex-grow">
    {product.productDescription}
    </p>
    </div>


    <div className="p-6 pt-0 flex items-center justify-between mt-auto">
    <span className="text-lg font-bold text-indigo-600">
    ₹{product.productPrice.toLocaleString()}
    </span>
    <button 
    onClick={() => handleClick(product.productId)}
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-xl px-4 py-2 text-sm transition cursor-pointer">
    <Trash size={16} />
    Delete 
    </button>
    </div>
    </div>
    </motion.div>
    ))}
    </div>
    </div>
  )
}

export default ViewProducts;