import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState(1);

    const handleAddProduct = () => {
        setProducts([...products, { id, label: '', price: '' }]);
        setId(id + 1);
    };
    
    for(let i=1; i<=10; i++){
        console.log(`2 x ${i} = ${i*2}`)
    }

    const handleRemoveProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setProducts(products.map((product) =>
            product.id === id ? { ...product, [field]: value } : product
        ));
    };

    return (
        <div>
            <section className="dark:bg-gray-900 py-0 my-[50px]">
                <div className="m-auto px-6 mx-auto lg:py-0 py-0 my-0">
                    <div className="w-full shadow-2xl rounded-xl dark:border md:mt-0 sm:max-w-md mx-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Expenses List
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                {products.map((product) => (
                                    <div key={product.id}>
                                        <RxCross2
                                            className='float-right font-[900] text-[20px] cursor-pointer'
                                            onClick={() => handleRemoveProduct(product.id)}
                                        />
                                        <div className='mb-[5px]'>
                                            <input
                                                type="text"
                                                value={product.label}
                                                onChange={(e) => handleInputChange(product.id, 'label', e.target.value)}
                                                className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Enter Expense Label"
                                            />
                                        </div>
                                        <div className="relative mt-[5px]">
                                            <input
                                                type="text"
                                                value={product.price}
                                                onChange={(e) => handleInputChange(product.id, 'price', e.target.value)}
                                                className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Enter Expense Amount"
                                            />
                                        </div>
                                        <hr className='w-full bg-gray-600 hover:bg-gray-900 mt-[5px] rounded-full h-[5px]' />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="block bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center bg-black-800 hover:bg-black hover:text-white hover:bg-black-900 transition duration-[0.5s] w-full"
                                    onClick={handleAddProduct}
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='w-[500px] mx-auto my-10'>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">Product List</h2>
                <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside">
                    {products.map((product) => (
                         (
                            <li key={product.id}>
                                {product.label} - {product.price}
                            </li>
                        ) 
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
