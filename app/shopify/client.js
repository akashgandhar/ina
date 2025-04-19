"use client";
import { createAdminRestApiClient } from "@shopify/admin-api-client";
import React, { useEffect, useState } from "react";

export default function ShopifyProvider() {
  const [products, setProducts] = useState({ products: [] });
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const getProducts = async () => {
    const response = await fetch("/api/getProducts");
    const data = await response?.json();
    setProducts(data);
  };

  console.log(products);
  

  useEffect(() => {
    getProducts();
  }, []);

  // Helper function to add delay between requests
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const addImage = async (id, sku) => {
    const product_id = id;
    const product_sku = sku.toUpperCase();
    const imageNumbers = [2, 3, 4, 5];

    const uploadOne = async (image) => {
      try {
        const response = await fetch("/api/addImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image, productId: product_id }),
        });
        await delay(500); // 500ms delay between image uploads
        return response;
      } catch (error) {
        console.error(`Error uploading image ${image}:`, error);
        return null;
      }
    };

    // Process images sequentially
    const results = [];
    for (const num of imageNumbers) {
      const imageUrl = `https://digimages.vercel.app/collection/${product_sku}/${product_sku}-${num}.jpg`;
      const response = await uploadOne(imageUrl);
      if (response) {
        results.push(await response.json());
      }
    }
    return results;
  };

  const handleAllProducts = async (productList) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    setProgress(0);
    
    try {
      const productIds = productList.map((product) => product.id);
      const productSkus = productList.map((product) => product.variants[0].sku);
      
      // Process products one by one with delay
      for (let i = 0; i < productIds.length; i++) {
        await addImage(productIds[i], productSkus[i]);
        setProgress(Math.floor(((i + 1) / productIds.length) * 100));
        await delay(1000); // 1 second delay between products
      }
      
      alert("All images processed successfully!");
    } catch (error) {
      console.error("Error processing products:", error);
      alert("Error processing some products. Check console for details.");
    } finally {
      setIsProcessing(false);
    }
  };



  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopify Client</h1>
      <button
        onClick={() => handleAllProducts(products.products.slice(1))}
        disabled={isProcessing}
        className={`bg-blue-500 text-white p-2 rounded ${
          isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {isProcessing ? `Processing... ${progress}%` : "Add Images"}
      </button>
      
      {isProcessing && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}