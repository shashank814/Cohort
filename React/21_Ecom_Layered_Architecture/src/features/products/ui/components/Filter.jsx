import React from "react";
import { useAllCategories } from "../../hooks/useProductHooks";

const Filter = ({ search, setSearch, category, setCategory }) => {

    let { data, isPending, error } = useAllCategories()

    if(isPending) return <h1>Loading categories</h1>
    // console.log("my all categories", data);

    if(error) return <h1>Error loading categories</h1>

  return (
    <div className="flex justify-between items-center gap-4 p-4 bg-white shadow rounded-lg">
      
      {/* 🔍 Search Box (Left) */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-1/2 border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
      />

      {/* 📂 Category Select (Right) */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-1/4 border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black"
      >
        <option value="" className="text-gray-600">All Categories</option>
        {data.map((item) => (
          <option className="bg-gray-600 text-black" key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;