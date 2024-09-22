import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section class="bg-[#c86cb4] ">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl text-[#fff] mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
          Customize a Unique Design Just Like You <br />
            products &amp; brands.
          </h1>

          {/* <p class="max-w-2xl mb-6 font-light text-[#f3f3f3] lg:mb-8 md:text-lg lg:text-xl ">
            This free and open-source landing page template was built using the
            utility classes from
            <a target="_blank" class="hover:underline">
              Tailwind CSS
            </a>{" "}
            and based on the components from the{" "}
            <a href="#/" class="hover:underline" target="_blank">
              Flowbite Library
            </a>{" "}
            and the
            <a
              href="https://flowbite.com/blocks/"
              target="_blank"
              class="hover:underline"
            >
              Blocks System
            </a>
            .
          </p> */}

          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
            <a
              href=""
              target="_blank"
              class="inline-flex items-center justify-center w-full px-3 gap-3 py-2 text-sm font-medium text-center text-white border border-[#00ec4c] rounded-lg sm:w-auto hover:bg-[#00ec4c] focus:ring-4 focus:ring-[#00ec4c] "
            >
              <Image src="/wp.png" width={32} height={32} />
              Whatsapp Now
            </a>
          </div>
        </div>

        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img className="mix-blend-"
            src="/a3.png"
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}
