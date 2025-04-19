// add an product image

import { createAdminRestApiClient } from "@shopify/admin-api-client";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { image, productId } = await request.json();
  console.log(image);
  console.log(productId);

  const client = createAdminRestApiClient({
    storeDomain: "https://52a54f-dd.myshopify.com",
    apiVersion: "2025-04",
    
  });

  const payload = {
    image: {
      src: image,
      product_id: productId,
    },
  };

  const response = await client.post(`products/${productId}/images.json`, {
    data: payload,
  });

  console.log(response);
  return NextResponse.json(response);
}
