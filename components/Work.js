export default function Work() {
  return (
    <section className="bg-surface-alt py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="section-title">Our work</h2>
          <p className="mt-4 text-ink-soft">
            A few of the properties we&apos;ve helped buy, sell, and rent over
            the years.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <img
            src="/images/work.webp"
            alt="Modern gabled houses with large triangular glass facades at sunset"
            width={720}
            height={540}
            className="w-full rounded-xl object-cover shadow-card"
            loading="lazy"
          />
          <div>
            <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-deep">
              Sold in 11 days
            </span>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Spacious, light-filled apartment in the heart of Reykjavik. Modern
              finishes, stunning mountain views.
            </p>
            <p className="mt-4 text-sm font-medium text-ink-muted">
              Reykjavik City Centre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
