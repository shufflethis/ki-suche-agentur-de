import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | KI-Suche Agentur",
  description: "Impressum und rechtliche Angaben der KI-Suche Agentur — ein Angebot der track by track GmbH, Berlin.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-violet-400">KI-Suche</span> Agentur
          </a>
          <a
            href="/"
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 hover:border-neutral-500 hover:text-white transition"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
            Rechtliche Angaben
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Impressum</h1>

          <div className="mt-10 space-y-8 text-neutral-400 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Angaben gemäß § 5 DDG</h2>
              <p>
                track by track GmbH<br />
                Schliemannstr. 23<br />
                10437 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Vertreten durch</h2>
              <p>Tobias Sander</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Kontakt</h2>
              <p>
                Telefon: 030 21923869<br />
                Telefax: 030 403 665 450<br />
                E-Mail:{" "}
                <a href="mailto:info@famefact.com" className="text-violet-400 hover:text-violet-300 transition">
                  info@famefact.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">DUNS-Nummer</h2>
              <p>34-024-8055</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                Registernummer: HRB 129805 B
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Umsatzsteuer</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE814954842
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Tobias Sander<br />
                Schliemannstr. 23<br />
                10437 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Streitschlichtung</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Weitere Informationen</h2>
              <p>
                Hier findest du unseren{" "}
                <a href="/datenschutz" className="text-violet-400 hover:text-violet-300 transition">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-sm text-neutral-500 md:flex-row md:justify-between">
          <div>
            <span className="font-semibold text-neutral-300">KI-Suche Agentur</span> — GEO
            &amp; LLMO Optimierung
          </div>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-white transition">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition">Datenschutz</a>
          </div>
          <div>&copy; {new Date().getFullYear()} KI-Suche Agentur. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </>
  );
}
