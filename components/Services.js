import { services } from "./data";

export default function Services() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="section-title">Our Services</h2>
          <p className="mt-4 text-ink-soft">
            From finding your dream home to growing your property portfolio — we
            offer a full range of real estate services tailored to your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-gray-100 bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <h3 className="text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {s.text}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block text-sm font-semibold text-brand-deep hover:text-ink"
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
