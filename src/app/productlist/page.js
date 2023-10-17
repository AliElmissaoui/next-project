'use client';
import React from 'react'
import { useEffect, useState } from 'react'
function productList() {
       const [product, setProduct] = useState([]);
       const check = async () => {
              let data = await fetch("https://dummyjson.com/products");
              data = await data.json();
              setProduct(data.products);
       }

       useEffect(() => {
              check();

       }, []);

       return (
              <div>
                     <h1>Product list</h1>
                     {
                            product.map((item, index) => (
                                   <h1 key={index}>{item.title}</h1>
                            ))


                     }
              </div>
       )
}

export default productList


