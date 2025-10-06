import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Input, Textarea, Button } from "@headlessui/react";

const ProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: String(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.productName || !formData.productDescription || !formData.productPrice) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.BASE_URL}/api/products`, formData);
      toast.success("Product added successfully!");
      setFormData({ productName: "", productDescription: "", productPrice: "" });
      onProductAdded(response?.data);
    } catch {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mt-6 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
        Add New Product
      </h2>

      <Input
        type="text"
        name="productName"
        placeholder="Product Name"
        value={formData.productName}
        onChange={handleChange}
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />

      <Textarea
        name="productDescription"
        placeholder="Product Description"
        value={formData.productDescription}
        onChange={handleChange}
        rows={4}
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />

      <Input
        type="number"
        name="productPrice"
        placeholder="Product Price"
        value={formData.productPrice}
        onChange={handleChange}
        className="w-full mb-6 p-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />

      <Button
        type="submit"
        disabled={loading}
        className={`w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition duration-200 ${
          loading && "opacity-70 cursor-not-allowed"
        }`}
      >
        {loading ? "Adding..." : "Add Product"}
      </Button>
    </form>
  );
};

export default ProductForm;
