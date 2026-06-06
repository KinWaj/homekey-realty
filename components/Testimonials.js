"use client";

import { useState, useEffect, useRef } from "react";
import { testimonials } from "./data";

export default function Testimonials() {
  // cards visible per slide, responsive
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);

  // drag state
  const [dragPx, setDragPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    function update() {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(3);
      else if (window.matchMedia("(min-width: 640px)").matches) setPerView(2);
      else setPerView(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = Math.max(1, Math.ceil(testimonials.length / perView));

  // keep page in range when perView changes
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (i) => setPage(((i % pageCount) + pageCount) % pageCount);
  const prev = () => goTo(page - 1);
  const next = () => goTo(page + 1);

  // --- pointer drag handlers ---
  function onPointerDown(e) {
    pausedRef.current = true;
    setDragging(true);
    startX.current = e.clientX;
    setDragPx(0);
  }
  function onPointerMove(e) {
    if (!dragging) return;
    setDragPx(e.clientX - startX.current);
  }
  function endDrag() {
    if (!dragging) return;
    setDragging(false);
    const width = trackRef.current?.offsetWidth || 1;
    const threshold = width * 0.15; // 15% of track triggers a slide
    if (dragPx <= -threshold) next();
    else if (dragPx >= threshold) prev();
    setDragPx(0);
    // resume autoplay shortly after interaction
    setTimeout(() => {
      pausedRef.current = false;
    }, 600);
  }

  const dragPercent =
    dragging && trackRef.current
      ? (dragPx / trackRef.current.offsetWidth) * 100
      : 0;

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="section-title">What They Say</h2>
            <p className="mt-4 text-ink-soft">
              Real experiences from people we&apos;ve helped find, sell, and
              invest in property.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="mt-12 overflow-hidden"
          role="region"
          aria-label="Customer testimonials carousel"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => {
            if (!dragging) pausedRef.current = false;
          }}
        >
          <ul
            className={`flex touch-pan-y select-none ${
              dragging ? "cursor-grabbing" : "cursor-grab transition-transform duration-500 ease-out"
            }`}
            style={{
              transform: `translateX(calc(-${page * 100}% + ${dragPercent}%))`,
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="shrink-0 px-3 first:pl-0 last:pr-0"
                style={{ width: `${100 / perView}%` }}
              >
                <figure
                  className={`flex h-full flex-col rounded-xl p-7 shadow-card ${
                    t.featured
                      ? "bg-brand text-white"
                      : "border border-gray-100 bg-white text-ink"
                  }`}
                >
                  <blockquote
                    className={`flex-1 text-sm leading-relaxed ${
                      t.featured ? "text-white/90" : "text-ink-soft"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        t.featured
                          ? "bg-white/20 text-white"
                          : "bg-surface-alt text-ink-soft"
                      }`}
                      aria-hidden="true"
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        {t.name}
                      </span>
                      <span
                        className={`block text-xs ${
                          t.featured ? "text-white/75" : "text-ink-muted"
                        }`}
                      >
                        {t.source}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={page === i}
              className={`h-2.5 rounded-full transition-all ${
                page === i ? "w-6 bg-brand" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
