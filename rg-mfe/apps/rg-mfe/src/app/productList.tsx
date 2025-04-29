import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


interface Product {
  id: number;
  name: string;
  price: number;
  productLink: string;
}



export default function App() {
  // Initial product list
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Product A', price: 29.99, productLink: '/product/1' },
    { id: 2, name: 'Product B', price: 19.99, productLink: '/product/2' },
    { id: 3, name: 'Product C', price: 39.99, productLink: '/product/3' },
  ]);

  // Consolidated form state (all values as strings)
  const [form, setForm] = useState({
    name: '',
    price: '',
    productLink: '',
  });

  // Update form values when inputs change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle form submission and add new product
  function handleSubmit(e) {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now(), // simple unique id
      name: form.name,
      price: parseFloat(form.price),
      productLink: form.productLink,
    };
    setProducts((prev) => [...prev, newProduct]);
    setForm({ name: '', price: '', productLink: '' });
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Product Table */}
      <table className="min-w-full bg-white border border-gray-200 mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b text-center">
                <a href={product.productLink} className="text-blue-500 hover:underline">
                  View Product
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Product Form */}
      <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-50 rounded shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            step="0.01"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productLink" className="block text-gray-700">Product Link</label>
          <input
            type="text"
            id="productLink"
            name="productLink"
            value={form.productLink}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Add Product
        </button>
      </form>
    </div>
  );
}