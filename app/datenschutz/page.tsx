import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | KI-Suche Agentur",
  description: "Datenschutzerklärung der KI-Suche Agentur — ein Angebot der track by track GmbH, Berlin. Informationen zum Schutz Ihrer personenbezogenen Daten.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
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
            Ihre Privatsphäre
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Datenschutzerklärung</h1>

          <div className="mt-10 space-y-10 text-neutral-400 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-base font-semibold text-neutral-200 mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
                wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
                Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3 className="text-base font-semibold text-neutral-200 mt-6 mb-2">Verantwortliche Stelle</h3>
              <p>
                track by track GmbH<br />
                Schliemannstraße 23<br />
                10437 Berlin<br />
                E-Mail:{" "}
                <a
                  href="mailto:hi@ki-suche-agentur.de"
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  hi@ki-suche-agentur.de
                </a>
              </p>

              <h3 className="text-base font-semibold text-neutral-200 mt-6 mb-2">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
                reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
                Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-base font-semibold text-neutral-200 mt-6 mb-2">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht
                bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in
                datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes,
                in dem unser Unternehmen seinen Sitz hat.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                3. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-base font-semibold text-neutral-200 mb-2">Cookies</h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine
                Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
                vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
                (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach
                Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
                Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung
                durch Ihren Webbrowser erfolgt.
              </p>

              <h3 className="text-base font-semibold text-neutral-200 mb-2">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
                sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
                Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine
                Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>

              <h3 className="text-base font-semibold text-neutral-200 mb-2">Kontaktformular / Audit-Formular</h3>
              <p>
                Wenn Sie uns per Kontaktformular oder über das Audit-Formular Anfragen zukommen
                lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen
                Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei
                uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
                Verarbeitung der in das Formular eingegebenen Daten erfolgt somit ausschließlich auf
                Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Analyse-Tools</h2>

              <h3 className="text-base font-semibold text-neutral-200 mb-2">Plausible Analytics</h3>
              <p>
                Diese Website nutzt Plausible Analytics, einen datenschutzfreundlichen Webanalyse-Dienst.
                Plausible verwendet keine Cookies und erhebt keine personenbezogenen Daten. Es werden
                lediglich anonymisierte, aggregierte Daten erfasst. Die Datenverarbeitung erfolgt auf
                Servern in der EU. Weitere Informationen finden Sie unter{" "}
                <a
                  href="https://plausible.io/data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  plausible.io/data-policy
                </a>
                .
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
              <p className="mb-4">Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
                <li>Diese Daten berichtigen oder löschen zu lassen</li>
                <li>Die Verarbeitung einzuschränken</li>
                <li>Der Verarbeitung zu widersprechen</li>
                <li>Ihre Daten in einem gängigen Format zu erhalten (Datenportabilität)</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. SSL-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                E-Mail:{" "}
                <a
                  href="mailto:hi@ki-suche-agentur.de"
                  className="text-violet-400 hover:text-violet-300 transition"
                >
                  hi@ki-suche-agentur.de
                </a>
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
