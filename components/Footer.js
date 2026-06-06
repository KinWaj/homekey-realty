export default function Footer() {
  return (
    <footer className="bg-surface-footer py-14">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-display text-ink">HomeKey</p>
          <p className="mt-3 text-xs text-ink-muted">
            © Copyright 2026. KinWaj.
            <br />
            All Rights Reserved.
          </p>
        </div>
 
        <div>
          <h2 className="text-sm font-semibold text-ink">About</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Erroribus vituperatoribus no eos, no nobis alienum qui ei, exerci
            dissentiet eum tacimates recusabo scripserit.
          </p>
        </div>
 
        <div>
          <h2 className="text-sm font-semibold text-ink">Contact</h2>
          <address className="mt-3 not-italic text-sm leading-relaxed text-ink-soft">
            21 Valentin Rapids Apt. 335
            <br />
            New Jersey, New York, USA
            <br />
            <a href="tel:+12435769802" className="hover:text-brand">
              +1 (243) 576-98-02
            </a>
            <br />
            <a href="mailto:info@company.com" className="hover:text-brand">
              info@company.com
            </a>
          </address>
        </div>
 
        <div>
          <h2 className="text-sm font-semibold text-ink">Map</h2>
          <iframe
            title="Map showing the HomeKey Realty office location in New York"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0179%2C40.7028%2C-73.9665%2C40.7314&layer=mapnik&marker=40.7171%2C-73.9922"
            className="mt-3 h-40 w-full rounded-md border-0"
            loading="lazy"
          />
          <a
            href="https://www.openstreetmap.org/?mlat=40.7171&mlon=-73.9922#map=14/40.7171/-73.9922"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-ink-muted hover:text-brand-deep"
          >
            View larger map
          </a>
        </div>
      </div>
 
      <div className="container-page mt-10 border-t border-gray-200 pt-6">
        <p className="text-center text-xs text-ink-muted">
          © Copyright 2026. KinWaj. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

