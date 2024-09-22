// pages/index.js

import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="flex w-full mx-auto text-left">
            <div class="relative w-full inline-flex items-center mx-auto align-left">
              <div class="text-left">
                <h1 class="max-w-7xl text-2xl font-bold leading-none tracking-normal text-black md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Customize a Unique Design Just Like You
                </h1>
                <p class="max-w-7xl w-full mt-8 text-base font-black tracking-wide leading-relaxed text-black">
                  Your designs, our creation. Whether it’s for a special
                  occasion or a special person, both deserve a unique gift and
                  what could be better than a diamond, especially in a jewellery
                  design of your choosing?
                </p>
                <p class="max-w-7xl w-full  text-base font-black tracking-wider leading-relaxed text-black">
                At INA Jewel, our exceptionally skilled jewellery designers will bring your visions to life, recreating designs according to your demands and preferences.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="py-20 overflow-hidden bg-gray-100 ">
        <div class="container px-4 mx-auto">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-wrap items-center -mx-5">
              <div class="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
                <div class="max-w-md">
                  <span class="text-lg font-bold text-[#c86cb4] ">
                    Getting Started with INA Jewels
                  </span>
                  <h2 class="mt-12 mb-10 text-5xl font-extrabold leading-tight text-gray-800 ">
                    Customize your Own Jewelry.
                  </h2>
                  <p class="mb-16 text-lg text-gray-600 ">
                    At INA Jewel, our exceptionally skilled jewellery designers
                    will bring your visions to life, recreating designs
                    according to your demands and preferences.
                  </p>
                  <a
                    class="inline-block px-12 py-4 text-white font-bold bg-[#c86cb4]/80 hover:bg-[#c86cb4] rounded-full shadow-lg transition duration-200"
                    href="#"
                  >
                    Whatsapp Now
                  </a>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-5">
                <ul>
                  <li class="flex pb-10 mb-8 border-b border-gray-200 ">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-[#c86cb4]/30  text-lg font-bold rounded-full text-[#c86cb4] ">
                        1
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-2 text-lg font-bold text-gray-700 ">
                        Step 1
                      </h3>
                      <p class="text-lg text-gray-500 ">
                        Send your design reference (Image, URL, Video, etc)
                      </p>
                    </div>
                  </li>
                  <li class="flex pb-10 mb-8 border-b border-gray-200 ">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-[#c86cb4]/30  text-lg font-bold rounded-full text-[#c86cb4] ">
                        2
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-2 text-lg font-bold text-gray-700 ">
                        Step 2
                      </h3>
                      <p class="text-lg text-gray-500 ">
                        We&apos;ll make a design render of your jewellery and send it
                        to you for approval.
                      </p>
                    </div>
                  </li>
                  <li class="flex pb-10 border-b border-gray-200 ">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-[#c86cb4]/30  text-lg font-bold rounded-full text-[#c86cb4] ">
                        3
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-2 text-lg font-bold text-gray-700 ">
                        Step 3
                      </h3>
                      <p class="text-lg text-gray-500 ">
                        Our skilled jewellery artisans will handcraft your
                        jewellery piece bringing your visions to life.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
