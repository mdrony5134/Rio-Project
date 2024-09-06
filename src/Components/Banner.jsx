import React from "react";

const Banner = () => {
  return (
    <div>
      <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
        <div class="relative z-10">
          <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  stroke-width="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Save time & <span class="text-blue-600"> work smarter</span> with
              AI Automation
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              We help you automate your workflows, automate repetitive <br />{" "}
              tasks, and elevate your business.
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Book Your Free Audit Call
              </a>
            </div>
          </div>
          <div class="flex justify-center mt-8 -space-x-4 rtl:space-x-reverse">
            <img
              class="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800"
              src="./images/profile1.jpg"
              alt=""
            />
            <img
              class="w-14 h-14  border-2 border-white rounded-full dark:border-gray-800"
              src="./images/profile2.jpg"
              alt=""
            />
            <img
              class="w-14 h-14  border-2 border-white rounded-full dark:border-gray-800"
              src="./images/profile3.jpg"
              alt=""
            />
            <div className="">
              <p className="ml-8 font-bold text-xl">200+ happy clients!</p>
              <a href="#" className="ml-8 text-lg text-gray-500">
                Join them now
              </a>
            </div>
          </div>
          <div class="relative max-w-7xl mx-auto mt-10 ">
            <img
              class="w-full rounded-2xl border border-gray-100 shadow"
              src="./images/banner.webp"
              alt=""
            />
            <div>
              <p className="text-center text-gray-500 text-lg mt-8">Trusted by 40+ worldwide clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
