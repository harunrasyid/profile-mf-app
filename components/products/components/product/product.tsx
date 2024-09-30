import React from "react";
import { ProductType } from "../../products.props";

export const Product = ({ price, id, image, rating, title }: ProductType) => {
  return (
    <div className="group relative" key={id}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            <span className="font-medium">⭐</span>{" "}
            <span className="font-bold">{rating.rate}</span> ({rating.count})
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};
