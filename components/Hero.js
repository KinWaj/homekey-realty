export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src="/images/hero.webp"
        alt="Suburban family homes on a quiet residential street"
        width={1280}
        height={720}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/20" />

      <div className="container-page flex min-h-[460px] flex-col justify-center py-20 sm:min-h-[540px]">
        <div className="max-w-xl">
          <h1 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Find your perfect property
          </h1>
          <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
            Professional service in property sales and rentals. Over 15 years of
            market experience.
          </p>
          <a href="#offers" className="btn-primary mt-8">
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}
