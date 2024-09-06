import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const ContentBlock = () => {
  return (
    <div>
      <section class="">
        <div class="grid max-w-7xl px-4 py-8 mx-auto gap-16 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <div className="">
              <p className="bg-white inline-block text-center px-4 text-lg font-bold py-2 rounded-lg shadow-md text-blue-500 mb-4 uppercase">
                Content Block
              </p>
            </div>
            <h1 class="max-w-2xl py-4 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Workflows with our AI <br /> automation{" "}
              <span className="text-blue-600">expertise</span>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Revolutionize tasks, reduce errors, and boost efficiency with
              intelligent technology, streamlining operations for unparalleled
              productivity.
            </p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center text-xl font-medium">
                <FaRegCircleCheck className="inline-block mr-2"/> Functional sections
              </p>
              <p className="flex items-center text-xl font-medium">
                <FaRegCircleCheck className="inline-block mr-2"/> Easy to customize
              </p>
            </div>

            <div class="mt-10">
              <a
                class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Book Your Free Audit Call
              </a>
            </div>
          </div>
          <div class="hidden w-full lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./images/image1.png" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentBlock;
