import React from "react";
import "../index.css";

function CategoryDropdown({ categories, setCategoryId }) {
  return (
    <select
      className="rounded flex-fill form-control-sm"
      onChange={(event) => setCategoryId(event.target.value)}
    >
      <option value={null}>Categorías</option>
      {categories.map((category) => (
        <optgroup key={category.id} label={category.name}>
          <option value={category.id}>{category.name}</option>
          {category.subs.length !== 0 ? (
            category.subs.map((subcategory) => {
              return <option value={subcategory.id}>{subcategory.name}</option>;
            })
          ) : (
            <></>
          )}
        </optgroup>
      ))}
    </select>
  );
}

export default CategoryDropdown;
