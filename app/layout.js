import {Gilda_Display} from "next/font/google";
import "./globals.css";
import ShopifyProvider from "./shopify/client";

export const glida = Gilda_Display(
  {weight: ['400',], style: "normal",subsets: ["latin-ext"], display: "swap"},
)



export const metadata = {
  title: "Ina Jewels",
  description: "Customize a Unique Design Just Like You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${glida.className} antialiased`}
      >
        {/* <ShopifyProvider/> */}
        {children}
      </body>
    </html>
  );
}
