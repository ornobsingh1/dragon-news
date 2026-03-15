import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-semibold">All Categories</h2>
      <div className="grid grid-col mt-3 gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className={
              "btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-accent justify-start"
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
