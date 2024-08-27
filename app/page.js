"use client";

import { useState } from "react";
import CategoryCard from "./components/CategoryCard";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import categories from "./data/categories";

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);

  const currentCategories = categories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto">
      <Header />
      <main className="pt-24 md:pt-28 px-8 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 lg:gap-20">
        {currentCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </main>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
