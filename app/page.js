import Image from "next/image";
import HowItWork from "./components/HowItWork";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <div class="relative h-[750px] w-full " id="home ">
        <nav class="flex items-center justify-between bg-white border-b z-10 relative">
          <div class="text-xl">
            <img
              src="https://cdn.shopify.com/s/files/1/0617/2760/4809/files/LOGO-Color.png?v=1719238664"
              alt="logo"
              class="w-28 h-28"
            />
          </div>

          <div class="toggle w-full text-end md:flex md:w-auto px-2 py-2 md:rounded">
            <a href="tel:+123">
              <div class="flex justify-end">
                <div class="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Continue Shopping
                </div>
              </div>
            </a>
          </div>
        </nav>
          <div class="absolute inset-0 opacity-100 -z-10 top-[16vh]" >
            <img
              src="https://cdn.shopify.com/s/files/1/0617/2760/4809/files/WhatsApp_Image_2024-09-10_at_10.32.04_31306be8.jpg?v=1726037249"
              alt="Background Image"
              class="object-cover object-top w-full h-full"
            />
          </div>
        
      </div>
      <HowItWork />
      <Form/>
    </>
  );
}
