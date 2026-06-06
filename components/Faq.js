"use client";

import { useState } from "react";
import { faqs } from "./data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <h2 className="section-title text-center">FAQ</h2>

        <div className="mt-12 grid items-start gap-4 lg:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="rounded-lg border border-gray-100 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    {item.q}
                    <span
                      className={`text-xl leading-none text-brand transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
