import React, { useState } from "react";
import ProductCard from "../components/productCard";

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 999 },
  { id: 2, name: "Smartphone", category: "electronics", price: 699 },
  { id: 3, name: "Smartwatch", category: "electronics", price: 299 },
  { id: 4, name: "Wireless Headphones", category: "electronics", price: 149 },
  { id: 5, name: "Gaming Monitor", category: "electronics", price: 499 },
  { id: 6, name: "Bluetooth Speaker", category: "electronics", price: 99 },

  
  { id: 7, name: "Sneakers", category: "footwear", price: 120 },
  { id: 8, name: "Running Shoes", category: "footwear", price: 140 },
  { id: 9, name: "Sandals", category: "footwear", price: 50 },
  { id: 10, name: "Formal Shoes", category: "footwear", price: 160 },
  { id: 11, name: "Boots", category: "footwear", price: 180 },

  
  { id: 12, name: "Graphic T-Shirt", category: "fashion", price: 25 },
  { id: 13, name: "Denim Jeans", category: "fashion", price: 50 },
  { id: 14, name: "Hoodie", category: "fashion", price: 60 },
  { id: 15, name: "Leather Jacket", category: "fashion", price: 120 },
  { id: 16, name: "Sports Joggers", category: "fashion", price: 45 },


  { id: 17, name: "Football", category: "sports", price: 60 },
  { id: 18, name: "Basketball", category: "sports", price: 55 },
  { id: 19, name: "Cricket Bat", category: "sports", price: 70 },
  { id: 20, name: "Tennis Racket", category: "sports", price: 85 },
  { id: 21, name: "Gym Gloves", category: "sports", price: 20 },
];

const Home = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter products based on category selection
  const categoryFilteredProducts =
    selectedCategory === "all"
      ? filteredProducts
      : filteredProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search for products..."
        className="relative w-full max-w-lg p-4 text-lg border-2 border-purple-500 rounded-full shadow-md
        focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white placeholder-gray-500 text-gray-800 transition mb-4"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 p-4 bg-gray-100 shadow-md rounded-lg mb-4">
        {["all", "electronics", "footwear", "fashion", "sports"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition duration-300 font-semibold shadow-md
            ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryFilteredProducts.length > 0 ? (
          categoryFilteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
