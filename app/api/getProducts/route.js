// // get products
// import { createAdminRestApiClient } from "@shopify/admin-api-client";

// import { NextResponse } from "next/server";

// export async function GET() {
//   const client = createAdminRestApiClient({
//     storeDomain: "https://52a54f-dd.myshopify.com",
//     apiVersion: "2025-04",
//   });

//   let allProducts = [];
//   let nextPageInfo = null;
//   let hasMore = true;

//   try {
//     while (hasMore) {
//       const searchParams = {
//         limit: 250,
//       };

//       if (nextPageInfo) {
//         searchParams.page_info = nextPageInfo;
//       }

//       const response = await client.get("/products.json", { searchParams });
//       const products = await response.json();
      
//       allProducts = [...allProducts, ...products.products];
      
//       // Check for next page in Link header
//       const linkHeader = response.headers.get('link');
//       nextPageInfo = null;
      
//       if (linkHeader) {
//         const links = linkHeader.split(',');
//         const nextLink = links.find(link => link.includes('rel="next"'));
//         if (nextLink) {
//           const match = nextLink.match(/page_info=([^>]+)/);
//           if (match) {
//             nextPageInfo = match[1];
//           }
//         }
//       }
      
//       hasMore = !!nextPageInfo;
//     }

//     return NextResponse.json({ products: allProducts });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }