import React from "react";
import Image from "next/image";

const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-200 border border-gray-300 shadow-md rounded-lg overflow-hidden z-0">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-darkBlack">{title}</h3>
        <p className="text-sm text-lightBlack mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
