import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi"; // Feather search icon

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
    } else {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
    }
  }, [query, products]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      {/* Search Bar */}
      <div className="relative">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search products by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Search Results */}
      {loading && <p className="mt-4 text-gray-500">Loading products...</p>}

      {query && !loading && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-md transition p-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
