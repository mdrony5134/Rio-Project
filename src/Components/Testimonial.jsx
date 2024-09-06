import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const Testimonial = () => {
  useEffect(() => {
    const slider = new Glide(".glide", {
      type: "carousel",
      autoplay: 1, // Time between slides (milliseconds)
      animationDuration: 7000, // Animation duration
      animationTimingFunc: "linear",
      perView: 3, // Number of slides visible
      gap: 30, // Gap between slides
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy(); // Clean up the slider on component unmount
    };
  }, []);

  return (
    <section className="py-24">
        <div className="text-center">
        <p className="bg-white inline-block text-center px-4 text-lg font-bold py-2 rounded-lg shadow-md text-blue-500 mb-4">Testimonials</p>
      </div>
      <div>
        <h1 className="text-5xl my-4 text-center font-extrabold">
        Leading the way in AI <br /> automation
        </h1>
      </div>
      <div className="glide">
        <div data-glide-el="track">
          <ul className="glide__slides mask-img ">
            <li className="glide__slide">
              <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Alex James</h1>
                    <p className="mt-0.5 text-sm font-medium text-gray-600">
                      Marketing Director @ ABC
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  "We approached Wize for an internal chatbot that's trained on
                  all of our sales data, and the results are amazing!"
                </p>
                <div className="flex mt-10 gap-0.5 text-blue-600">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </li>
            <li className="glide__slide">
              <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Alex James</h1>
                    <p className="mt-0.5 text-sm font-medium text-gray-600">
                      Marketing Director @ ABC
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  "We approached Wize for an internal chatbot that's trained on
                  all of our sales data, and the results are amazing!"
                </p>
                <div className="flex mt-10 gap-0.5 text-blue-600">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </li>
            <li className="glide__slide">
              <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Alex James</h1>
                    <p className="mt-0.5 text-sm font-medium text-gray-600">
                      Marketing Director @ ABC
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  "We approached Wize for an internal chatbot that's trained on
                  all of our sales data, and the results are amazing!"
                </p>
                <div className="flex mt-10 gap-0.5 text-blue-600">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
