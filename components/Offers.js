import { offers } from "./data";

export default function Offers() {
  return (
    <section id="offers" className="bg-surface-alt py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="section-title">Current offers</h2>
          <p className="mt-4 text-ink-soft">
            Browse our latest properties available for sale and rent.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offers.map((o) => (
            <article
              key={o.title}
              className="overflow-hidden rounded-xl bg-white shadow-card transition-shadow hover:shadow-cardHover"
            >
              <img
                src={o.image}
                alt={`${o.title} in ${o.location}`}
                width={800}
                height={600}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg text-ink">{o.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {o.location}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-sm text-ink-muted">{o.area}</span>
                  <span className="text-lg font-bold text-brand-deep">
                    {o.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
