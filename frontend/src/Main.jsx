import { useEffect, useState } from 'react'
import ProductForm from './components/ProductForm'
import ViewProducts from './components/ViewProducts'
import axios from 'axios';
import ShimmerCard from './components/ShimmerCard';

export const Main = () => {
    const [allProductsData, setAllProductsData] = useState([]);

    const loadAllProducts = async () => {
            const response = await axios.get(`${process.env.BASE_URL}/api/products`);
            setAllProductsData(response?.data?.allProductsData || [])
            console.log(response?.data?.allProductsData);
        }

        useEffect(()=>{
          loadAllProducts();
        },[])

        const handleProductAdded = (newProduct) => {
            setAllProductsData((prev) => [...prev, newProduct]);
        };

        
        const handleProductDeleted = (id) => {
            setAllProductsData((prev) => prev.filter((p) => p.productId !== id));
        };
  return (
    <>
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
        <div className="flex-1 rounded-2xl shadow-md bg-white p-5 transition-all hover:shadow-lg">
            {allProductsData.length === 0 ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <ShimmerCard key={index} />
                    ))
            ) : (
                <ViewProducts
                allProductsData={allProductsData}
                onDelete={handleProductDeleted}
                />
            )}
            </div>

    
        <div className="w-full md:w-1/3 rounded-2xl shadow-md bg-white p-5 transition-all hover:shadow-lg">
            <ProductForm onProductAdded={handleProductAdded} />
        </div>

    </div>

    </>
  )
}
