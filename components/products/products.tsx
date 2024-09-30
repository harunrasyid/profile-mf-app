import React, { useEffect, useState } from "react";
import { ProductType } from "./products.props";
import { Product } from "@/components/products/components";

export default function Products() {
  const [data, setData] = useState<ProductType[]>([]);
  async function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products list:
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
