import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h1>GifExpertApp</h1>
        <NavLink to={"/"} className="btn btn-primary d-flex align-items-center">
          Volver al inicio
        </NavLink>
      </div>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
