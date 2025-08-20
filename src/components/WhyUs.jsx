import React from "react";
import whyus from "../assets/img/whyus.jpg";

/* inline icons (same as you had) */
const IconIdea = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M9 18h6"
      stroke="#F26A33"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2a6 6 0 0 0-3 11.1V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.9A6 6 0 0 0 12 2z"
      stroke="#111827"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconQuality = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 2l3 2 3 1v5a7 7 0 0 1-3 5l-3 2-3-2A7 7 0 0 1 6 10V5l3-1 3-2z"
      stroke="#111827"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12.5l1.8 1.8L14.5 11"
      stroke="#F26A33"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconValue = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="#111827"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M10.5 9.5c.5-.5 1.5-.5 2 0 .5.6 0 1.5-1 1.8-1 .3-1.2 1.7.2 2"
      stroke="#F26A33"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7v1.5M12 15v1.5"
      stroke="#F26A33"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default function WhyUs() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start text-center lg:text-left">
            {/* LEFT: label + heading + overlay card */}
            <div className="order-1 flex flex-col items-center lg:items-start">
              <p className="text-[#F26A33] text-sm font-semibold mb-2">
                Why us for you
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-semibold leading-tight text-black tracking-tight text-center lg:text-left">
                Design agency working with
                <br />
                brands building insightful
                <br />
                strategy
              </h2>

              {/* Overlay card under text */}
              <div
                className="
            mt-8
            w-full
            lg:w-[100%] xl:w-[1000px]
            bg-white rounded-lg shadow-2xl
            p-6 sm:p-8
            z-20
          "
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  {/* Feature 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full ring-1 ring-gray-100 flex items-center justify-center bg-white">
                      <IconIdea />
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-black">
                      Innovation
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 leading-6 max-w-[250px]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full ring-1 ring-gray-100 flex items-center justify-center bg-white">
                      <IconQuality />
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-black">
                      Quality-Focused
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 leading-6 max-w-[250px]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full ring-1 ring-gray-100 flex items-center justify-center bg-white">
                      <IconValue />
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-black">
                      Value For Money
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 leading-6 max-w-[250px]">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: image */}
            <div className="order-2 flex justify-center lg:justify-end">
              <img
                src={whyus}
                alt="developer working"
                lazy="loading"
                className="w-full max-w-[420px] object-cover h-[260px] sm:h-[320px] md:h-[380px] lg:h-[500px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
