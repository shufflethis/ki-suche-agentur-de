export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-violet-400">KI-Suche</span> Agentur
          </a>
          <div className="hidden gap-6 text-sm text-neutral-400 md:flex">
            <a href="#leistungen" className="hover:text-white transition">Leistungen</a>
            <a href="#ki-suche" className="hover:text-white transition">KI-Suche</a>
            <a href="#warum-geo" className="hover:text-white transition">Warum GEO</a>
            <a href="#prozess" className="hover:text-white transition">Prozess</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
          </div>
          <button
            data-open-audit
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 transition cursor-pointer"
          >
            Kostenlose Analyse
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-neutral-950 to-neutral-950" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
            Generative Engine Optimization (GEO) &amp; KI-Optimierung
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            GEO Agentur fuer maximale{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Sichtbarkeit in der KI-Suche
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Ihre Kunden suchen nicht mehr nur bei Google. Sie fragen ChatGPT, nutzen Perplexity
            und verlassen sich auf Google Gemini und AI Overviews. Als spezialisierte GEO-Agentur
            mit SEO-Expertise optimieren wir gezielt Ihre Sichtbarkeit in KI-Suchmaschinen — fuer
            mehr Reichweite, mehr Relevanz und mehr Leads durch KI-Optimierung.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              data-open-audit
              className="rounded-lg bg-violet-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500 transition cursor-pointer"
            >
              Kostenlose Sichtbarkeitsanalyse anfordern
            </button>
            <a
              href="#warum-geo"
              className="rounded-lg border border-neutral-700 px-8 py-3.5 text-base font-medium text-neutral-300 hover:border-neutral-500 hover:text-white transition"
            >
              Mehr erfahren
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-neutral-800 pt-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">40%</div>
              <div className="mt-1 text-xs text-neutral-500">der Suchanfragen starten bereits in KI-Tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3x</div>
              <div className="mt-1 text-xs text-neutral-500">hoehere Conversion bei KI-Empfehlungen</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="mt-1 text-xs text-neutral-500">Unternehmen vertrauen auf unsere GEO-Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* KI-Suche veraendert das Suchverhalten */}
      <section id="ki-suche" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            KI-Suche veraendert das Suchverhalten — und damit Ihr Marketing
          </h2>
          <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
            <p>
              Die Art, wie Menschen im Internet nach Informationen, Produkten und Dienstleistungen
              suchen, veraendert sich grundlegend. Waehrend Google jahrelang das unangefochtene
              Tor zum Internet war, nutzen immer mehr Menschen KI-basierte Suchsysteme wie
              ChatGPT, Perplexity, Google Gemini, Microsoft Copilot und Claude als erste
              Anlaufstelle fuer ihre Fragen. Diese KI-Systeme liefern keine Liste von zehn blauen
              Links mehr, sondern direkte, zusammengefasste KI-Antworten — oft mit konkreten
              Empfehlungen fuer Unternehmen, Produkte und Dienstleister.
            </p>
            <p>
              Fuer Unternehmen bedeutet das: Wer in diesen KI-Antworten nicht vorkommt, verliert
              zunehmend Sichtbarkeit und potenzielle Kunden. Klassische Suchmaschinenoptimierung
              (SEO) allein reicht nicht mehr aus. Die Algorithmen von Large Language Models und
              KI-Modellen funktionieren fundamental anders als der Google-Algorithmus. Sie bewerten
              Autoritaet, Konsistenz und semantische Relevanz auf eine voellig neue Weise. Genau
              hier setzt Generative Engine Optimization an — die systematische Optimierung Ihrer
              digitalen Praesenz fuer KI-Suchsysteme und KI-Suchen.
            </p>
            <p>
              Ob AI Overviews bei Google, Perplexity als Recherche-Tool oder ChatGPT als
              Beratungsassistent: Die Zielgruppe Ihrer Kunden verteilt sich auf immer mehr
              KI-Systemen. Wer jetzt nicht gezielt optimiert, verliert den Anschluss. Eine
              strategisch aufgestellte GEO Agentur analysiert die relevanten Quellen, aus denen
              KI-Modelle ihre Antworten zusammenstellen, und sorgt dafuer, dass Ihre Marke als
              vertrauenswuerdige und relevante Quelle erkannt wird.
            </p>
          </div>
        </div>
      </section>

      {/* Warum wir die richtige GEO Agentur sind */}
      <section id="warum-geo" className="border-t border-neutral-800 bg-neutral-900/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Darum sind wir die richtige GEO Agentur fuer Ihre KI-Sichtbarkeit
          </h2>
          <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
            <p>
              Als eine der ersten spezialisierten GEO-Agenturen im deutschsprachigen Raum haben
              wir fruehzeitig erkannt, dass Unternehmen eine neue Strategie brauchen, um in der
              Aera der KI-Suche wettbewerbsfaehig zu bleiben. Unser Team kombiniert tiefes
              Verstaendnis fuer natuerliche Sprachverarbeitung, LLM-Architektur und klassisches
              digitales Marketing zu einem ganzheitlichen Ansatz, der Ihre Marke dort platziert,
              wo Ihre Kunden heute suchen.
            </p>
            <p>
              Was uns von anderen Agenturen unterscheidet: Wir verbinden fundierte SEO-Expertise
              mit modernster KI-Optimierung. Wir kennen nicht nur die Ranking-Faktoren von Google,
              sondern verstehen, wie ChatGPT, Perplexity und Google Gemini entscheiden, welche
              Quellen sie in ihren KI-Antworten zitieren. Dieses Wissen setzen wir strategisch
              ein — mit datenbasierten Massnahmen, die messbare Ergebnisse liefern.
            </p>
            <p>
              Unsere Kunden profitieren von kontinuierlichem Monitoring ihrer KI-Sichtbarkeit,
              regelmaessigen Analysen und einem proaktiven Ansatz: Wenn sich KI-Modelle aendern
              oder neue KI-Systeme relevant werden, passen wir Ihre Strategie sofort an. So
              bleiben Sie dauerhaft als relevante Quelle sichtbar — von ChatGPT bis Google
              AI Overviews.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Unsere Leistungen: Mehr Sichtbarkeit durch gezielte KI-Optimierung
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Von der Analyse bis zur laufenden Optimierung — wir decken den gesamten
            GEO-Lifecycle ab und machen Ihr Unternehmen in KI-Suchmaschinen sichtbar.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔍",
                title: "KI-Sichtbarkeitsanalyse",
                desc: "Wir pruefen systematisch, wie Ihr Unternehmen aktuell in ChatGPT, Perplexity, Google Gemini, AI Overviews und anderen KI-Systemen dargestellt wird. Sie erhalten einen detaillierten Report mit konkreten Handlungsempfehlungen und einem Benchmark gegen Ihre Wettbewerber.",
              },
              {
                icon: "📊",
                title: "GEO-Strategieentwicklung",
                desc: "Basierend auf der Analyse entwickeln wir eine massgeschneiderte GEO-Strategie. Wir identifizieren die relevanten Prompts und Suchanfragen Ihrer Zielgruppe, analysieren die Quellen, die LLMs bevorzugt zitieren, und erstellen einen strategischen Fahrplan fuer maximale KI-Sichtbarkeit.",
              },
              {
                icon: "✍️",
                title: "Content-Optimierung fuer LLMs",
                desc: "Wir optimieren Ihre bestehenden Inhalte und erstellen hochwertigen Content, der von KI-Systemen bevorzugt als Quelle herangezogen wird. Dazu gehoeren strukturierte Daten, Entity-Markup und semantisch reichhaltige Texte mit den richtigen Keywords, die LLMs als vertrauenswuerdig einstufen.",
              },
              {
                icon: "🏗️",
                title: "Technische GEO-Optimierung",
                desc: "Wir implementieren technische Massnahmen wie llms.txt-Dateien, optimierte Schema-Markups, Knowledge-Graph-Integration und strukturierte FAQ-Bereiche. Diese technischen Signale helfen KI-Systemen, Ihre Inhalte korrekt zu verstehen und in KI-Antworten einzubinden.",
              },
              {
                icon: "📈",
                title: "Prompt-Monitoring & Tracking",
                desc: "Mit unseren Monitoring-Tools tracken wir kontinuierlich, wie Ihr Unternehmen in KI-Antworten erwaehnt wird. Sie sehen in Echtzeit, bei welchen Prompts Sie auftauchen, wie sich Ihre Sichtbarkeit entwickelt und wo noch Optimierungspotenzial besteht.",
              },
              {
                icon: "🤝",
                title: "Reputation Engineering",
                desc: "Wir bauen gezielt digitale Autoritaetssignale auf, die LLMs dazu bringen, Ihr Unternehmen haeufiger und positiver zu erwaehnen. Dazu gehoeren PR-Massnahmen, Branchenverzeichnisse, Fachpublikationen und strategisches Community-Engagement auf Plattformen wie Reddit und LinkedIn.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-violet-500/30 transition"
              >
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* So optimieren wir gezielt fuer die KI-Suche */}
      <section className="border-t border-neutral-800 bg-neutral-900/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            So optimieren wir gezielt fuer die KI-Suche
          </h2>
          <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
            <p>
              KI-Optimierung ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess.
              Unsere GEO-Agentur setzt auf eine Kombination aus datenbasierter Analyse, strategischer
              Content-Erstellung und technischer Suchmaschinenoptimierung, um Ihre Marke in den
              KI-Antworten von ChatGPT, Perplexity und Google Gemini zu platzieren.
            </p>
            <p>
              Der erste Schritt ist immer eine tiefgehende Analyse: Wir pruefen, welche KI-Systeme
              fuer Ihre Zielgruppe relevant sind, welche Prompts Ihre potenziellen Kunden verwenden
              und welche Wettbewerber bereits in KI-Antworten auftauchen. Daraus leiten wir eine
              gezielte Strategie ab — mit klaren Prioritaeten, messbaren KPIs und einem realistischen
              Zeitplan.
            </p>
            <p>
              Im Kern geht es darum, Ihre Inhalte so zu strukturieren, dass KI-Modelle sie als
              hochwertige, relevante Quelle erkennen. Das bedeutet: semantisch optimierter Content,
              strukturierte Daten, konsistente Entity-Signale und vertrauenswuerdige Backlinks
              aus autoritaetiven Quellen. Gleichzeitig ueberwachen wir mit unseren Monitoring-Tools
              kontinuierlich, wie sich Ihre KI-Sichtbarkeit entwickelt, und passen die Massnahmen
              laufend an.
            </p>
          </div>
        </div>
      </section>

      {/* Von ChatGPT bis Google Gemini */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Von ChatGPT bis Google Gemini: KI-Sichtbarkeit maximieren
          </h2>
          <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
            <p>
              Jedes KI-System funktioniert anders. ChatGPT greift auf ein breites Spektrum
              indexierter Webseiten und Trainingsdaten zurueck. Perplexity durchsucht das Internet
              in Echtzeit und bevorzugt aktuelle, gut strukturierte Quellen. Google Gemini und die
              AI Overviews nutzen die eigene Suchinfrastruktur, bewerten aber zusaetzlich Entity-Signale
              und Knowledge-Graph-Daten. Und Claude setzt stark auf kontextuell relevante,
              faktenbasierte Inhalte.
            </p>
            <p>
              Unsere Expertise als GEO Agentur liegt darin, diese unterschiedlichen Anforderungen
              zu verstehen und eine uebergreifende Strategie zu entwickeln. Wir analysieren, wie
              verschiedene KI-Modelle Ihre Branche und Ihre Wettbewerber behandeln, und optimieren
              gezielt fuer die Plattformen, die fuer Ihre Zielgruppe die hoechste Relevanz haben.
              So maximieren wir Ihre Sichtbarkeit in der gesamten KI-Suchlandschaft.
            </p>
            <p>
              Besonders wichtig: KI-Systeme aktualisieren ihre Modelle und Datenquellen
              kontinuierlich. Was heute in einer KI-Antwort erscheint, kann morgen verschwinden.
              Deshalb ist fortlaufendes Monitoring unverzichtbar. Unsere Tools tracken Ihre
              Praesenz in allen relevanten KI-Systemen und alarmieren sofort, wenn sich
              Veraenderungen ergeben.
            </p>
          </div>
        </div>
      </section>

      {/* Content Marketing und GEO */}
      <section className="border-t border-neutral-800 bg-neutral-900/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Content Marketing: Was bringt Ihnen GEO?
          </h2>
          <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
            <p>
              Hochwertiger Content ist das Fundament jeder erfolgreichen GEO-Strategie. Aber
              Content fuer KI-Systeme unterscheidet sich grundlegend von klassischem SEO-Content.
              Waehrend Suchmaschinenoptimierung auf Keywords und Backlinks setzt, geht es bei der
              KI-Optimierung darum, als relevante Quelle fuer LLMs erkannt zu werden. Das erfordert
              faktenreiche, gut strukturierte Inhalte, die semantisch praezise formuliert sind.
            </p>
            <p>
              Unsere Content-Strategie fuer GEO umfasst: die Erstellung von Answer-First Content,
              der direkt auf haeufige KI-Anfragen antwortet; den Aufbau von Pillar-Pages, die Ihre
              Expertise in einem Themengebiet buendeln; und die Optimierung bestehender Inhalte mit
              strukturierten Daten, Schema-Markup und semantisch relevanten Keywords. All das macht
              Ihren Content nicht nur fuer KI-Suchen sichtbar, sondern verbessert auch Ihre
              klassischen SEO-Rankings.
            </p>
            <p>
              Ein weiterer entscheidender Faktor: Zitierfaehigkeit. KI-Modelle bevorzugen Inhalte,
              die sie als vertrauenswuerdige Quelle zitieren koennen. Das bedeutet: klare
              Autorenprofile, Quellenangaben, Statistiken und Expertenmeinungen. Wir helfen Ihnen,
              Content zu erstellen, der nicht nur gefunden wird, sondern in KI-Antworten aktiv
              empfohlen und verlinkt wird.
            </p>
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            So gehen wir als GEO Agentur vor: In 4 Schritten zur KI-Sichtbarkeit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Wir arbeiten datengetrieben und transparent. Jeder Schritt baut auf messbaren
            Ergebnissen auf, damit Sie jederzeit den Fortschritt nachvollziehen koennen.
          </p>
          <div className="mt-16 space-y-12">
            {[
              {
                step: "01",
                title: "Audit & Ist-Analyse",
                desc: "Im ersten Schritt analysieren wir Ihre aktuelle Praesenz in KI-Suchsystemen. Wir pruefen hunderte relevanter Prompts in ChatGPT, Perplexity und Google AI Overviews und dokumentieren, wo und wie Ihr Unternehmen erwaehnt wird. Gleichzeitig analysieren wir Ihre Wettbewerber und identifizieren Luecken und Chancen. Das Ergebnis ist ein umfassender Sichtbarkeitsreport mit konkretem Scoring.",
              },
              {
                step: "02",
                title: "Strategie & Roadmap",
                desc: "Auf Basis der Analyseergebnisse entwickeln wir eine individuelle GEO-Strategie. Wir priorisieren Massnahmen nach Impact und Aufwand, definieren KPIs und erstellen eine realistische Roadmap fuer die kommenden drei bis sechs Monate. Sie wissen genau, was wann passiert und welche Ergebnisse Sie erwarten koennen.",
              },
              {
                step: "03",
                title: "Umsetzung & Optimierung",
                desc: "Unser Team setzt die definierten Massnahmen um: hochwertige Content-Erstellung und -Optimierung, technische Implementierungen, Aufbau von Autoritaetssignalen und PR-Massnahmen. Wir arbeiten eng mit Ihrem Team zusammen und liefern regelmaessige Updates. Jede Massnahme wird auf ihre Wirksamkeit getestet und bei Bedarf angepasst.",
              },
              {
                step: "04",
                title: "Monitoring & Skalierung",
                desc: "Nach der initialen Optimierung ueberwachen wir kontinuierlich Ihre KI-Sichtbarkeit. Unser Prompt-Monitoring-System trackt Veraenderungen in Echtzeit und alarmiert bei Ranking-Verlusten. Wir passen die Strategie laufend an neue LLM-Updates, Algorithmus-Aenderungen und Marktentwicklungen an, damit Sie dauerhaft sichtbar bleiben.",
              },
            ].map((p) => (
              <div key={p.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-600/20 text-lg font-bold text-violet-400">
                  {p.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unterschied GEO vs SEO */}
      <section className="border-t border-neutral-800 bg-neutral-900/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            GEO vs. klassisches SEO: Sichtbarkeit neu denken
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-700 text-left">
                  <th className="pb-3 pr-4 font-medium text-neutral-400">Kriterium</th>
                  <th className="pb-3 pr-4 font-medium text-neutral-400">Klassisches SEO</th>
                  <th className="pb-3 font-medium text-violet-400">GEO (Generative Engine Optimization)</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-4 font-medium">Zielplattform</td>
                  <td className="py-3 pr-4">Google, Bing (10 blaue Links)</td>
                  <td className="py-3">ChatGPT, Perplexity, Google Gemini, AI Overviews, Claude</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-4 font-medium">Ranking-Faktoren</td>
                  <td className="py-3 pr-4">Backlinks, Keywords, PageSpeed</td>
                  <td className="py-3">Autoritaet, Konsistenz, semantische Tiefe, Zitierfaehigkeit</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-4 font-medium">Ergebnis</td>
                  <td className="py-3 pr-4">Position 1-10 in SERP</td>
                  <td className="py-3">Direkte Empfehlung in KI-Antworten</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 pr-4 font-medium">Content-Stil</td>
                  <td className="py-3 pr-4">Keyword-optimiert</td>
                  <td className="py-3">Faktenreich, strukturiert, semantisch hochwertig</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Tracking</td>
                  <td className="py-3 pr-4">Search Console, Rankings</td>
                  <td className="py-3">Prompt-Monitoring, LLM-Erwaehnung, Citation-Tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-neutral-400 leading-relaxed">
            Wichtig: GEO ersetzt SEO nicht, sondern ergaenzt es. Viele LLMs nutzen Google-Suchergebnisse
            als Datenquelle. Eine starke Suchmaschinenoptimierung als Basis verstaerkt daher auch Ihre
            GEO-Ergebnisse. Unsere Strategie integriert beide Disziplinen fuer maximale Sichtbarkeit —
            egal ob Ihre Kunden bei Google suchen, Perplexity nutzen oder ChatGPT fragen.
          </p>
        </div>
      </section>

      {/* Wann ist KI-Optimierung sinnvoll */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Wann ist Optimierung fuer KI-gestuetzte Antworten sinnvoll?
          </h2>
          <div className="mt-8 space-y-6 text-neutral-400 leading-relaxed">
            <p>
              GEO lohnt sich besonders, wenn Ihre Zielgruppe aktiv KI-Systeme fuer Recherche
              und Kaufentscheidungen nutzt. Das betrifft heute nahezu jede Branche — von
              B2B-Dienstleistern ueber E-Commerce bis hin zu lokalen Unternehmen. Besonders
              profitieren Branchen mit hohem Beratungsbedarf: Rechtsanwaelte, Aerzte, Finanzberater,
              SaaS-Unternehmen, Agenturen und Unternehmensberater.
            </p>
            <p>
              Eine KI-Optimierung ist strategisch sinnvoll, wenn Sie feststellen, dass Ihre
              Wettbewerber bereits in KI-Antworten auftauchen, Ihre Website zwar gute SEO-Rankings
              hat, aber in ChatGPT oder Perplexity nicht erwaehnt wird, oder wenn Sie neue
              Maerkte und Zielgruppen erschliessen wollen. In all diesen Faellen bietet GEO
              einen messbaren Wettbewerbsvorteil.
            </p>
            <p>
              Unser Rat: Warten Sie nicht, bis Ihre Wettbewerber die KI-Suche dominieren.
              Fruehzeitige Optimierung zahlt sich aus, denn KI-Modelle bauen auf historischen
              Daten auf. Je frueher Sie als relevante Quelle etabliert sind, desto stabiler
              ist Ihre Position langfristig.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-800 bg-neutral-900/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            FAQ: Haeufig gestellte Fragen zur GEO Agentur
          </h2>
          <div className="mt-12 space-y-6">
            {[
              {
                q: "Was genau ist Generative Engine Optimization (GEO)?",
                a: "GEO ist die systematische Optimierung Ihrer digitalen Praesenz fuer KI-basierte Suchsysteme wie ChatGPT, Perplexity, Google Gemini und AI Overviews. Ziel ist es, dass Ihr Unternehmen in den KI-Antworten dieser Systeme erwaehnt und empfohlen wird. Waehrend klassisches SEO auf Google-Rankings abzielt, optimiert GEO gezielt fuer die Algorithmen von Large Language Models und KI-Modellen.",
              },
              {
                q: "Wie unterscheidet sich eine GEO Agentur von einer klassischen SEO Agentur?",
                a: "Eine GEO Agentur optimiert nicht nur fuer Google-Rankings, sondern gezielt fuer KI-Suchsysteme wie ChatGPT und Perplexity. Das erfordert andere Tools, andere Strategien und tiefes Verstaendnis fuer die Funktionsweise von KI-Modellen. Wir verstehen, wie LLMs entscheiden, welche Quellen sie zitieren — und optimieren Ihre Inhalte entsprechend.",
              },
              {
                q: "Wie lange dauert es, bis Ergebnisse sichtbar werden?",
                a: "Erste Verbesserungen in der KI-Sichtbarkeit sind typischerweise nach vier bis acht Wochen messbar. Signifikante Veraenderungen in der Haeufigkeit und Qualitaet von KI-Erwaehnung zeigen sich nach drei bis sechs Monaten. Die Geschwindigkeit haengt von Ihrer Ausgangslage, der Wettbewerbssituation und dem Umfang der Massnahmen ab.",
              },
              {
                q: "Funktioniert GEO fuer jede Branche?",
                a: "Ja, GEO ist branchenuebergreifend relevant. Besonders profitieren Branchen mit hohem Beratungsbedarf: Rechtsanwaelte, Aerzte, Finanzberater, SaaS-Unternehmen, Agenturen und lokale Dienstleister. Ueberall dort, wo potenzielle Kunden Fragen an KI-Systeme stellen, ist GEO der Schluessel zur Sichtbarkeit.",
              },
              {
                q: "Brauche ich noch SEO, wenn ich GEO mache?",
                a: "Unbedingt. SEO und GEO ergaenzen sich. Viele KI-Systeme greifen auf Google-Suchergebnisse und indexierte Webseiten zurueck. Eine starke SEO-Grundlage verstaerkt Ihre GEO-Ergebnisse. Wir empfehlen als GEO Agentur immer einen integrierten Ansatz, der beide Disziplinen strategisch vereint.",
              },
              {
                q: "Wie messen Sie den Erfolg von GEO-Massnahmen?",
                a: "Wir nutzen proprietaere Monitoring-Tools, die regelmaessig hunderte relevanter Prompts in verschiedenen KI-Systemen abfragen und die Ergebnisse analysieren. Sie erhalten woechentliche Reports mit KPIs wie Erwaehnung-Haeufigkeit, Sentiment, Position in KI-Antworten und Veraenderungen ueber Zeit.",
              },
              {
                q: "Was kostet eine GEO-Optimierung?",
                a: "Unsere Leistungen beginnen mit einer kostenlosen Sichtbarkeitsanalyse. Danach bieten wir modulare Pakete ab 1.500 Euro monatlich an, abhaengig vom Umfang der Massnahmen und Ihrer Branche. Kontaktieren Sie uns fuer ein individuelles Angebot — kostenlos und unverbindlich.",
              },
              {
                q: "Wie waehlt die KI aus, was in die Antwort kommt?",
                a: "KI-Modelle bewerten Inhalte nach Relevanz, Autoritaet, Aktualitaet und semantischer Praezision. Quellen mit hoher Zitierfaehigkeit, konsistenten Entity-Signalen und strukturierten Daten werden bevorzugt. Genau diese Faktoren optimieren wir strategisch als Ihre GEO Agentur.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-neutral-800 bg-neutral-900/50 px-6 py-4"
              >
                <summary className="cursor-pointer list-none text-base font-medium text-white flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-neutral-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Kontakt */}
      <section id="kontakt" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ihre Chance auf mehr Sichtbarkeit in der KI-Suche
          </h2>
          <p className="mt-4 text-neutral-400">
            Finden Sie heraus, wie Ihr Unternehmen aktuell in ChatGPT, Perplexity und anderen
            KI-Suchsystemen dargestellt wird. Wir pruefen Ihre Sichtbarkeit und zeigen Ihnen
            konkrete Optimierungspotenziale — kostenlos und unverbindlich.
          </p>
          <button
            data-open-audit
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500 transition cursor-pointer"
          >
            🎯 Gratis GEO Audit starten
          </button>
          <p className="mt-4 text-xs text-neutral-500">
            Kein Abo, kein Vertrag, kein Risiko. Ergebnis innerhalb von 24h per Mail.
          </p>
        </div>
      </section>

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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "KI-Suche Agentur",
            description:
              "Spezialisierte GEO-Agentur fuer Generative Engine Optimization. Wir optimieren Ihre Sichtbarkeit in ChatGPT, Perplexity, Google Gemini und KI-Suchmaschinen.",
            url: "https://ki-suche-agentur.de",
            areaServed: [
              { "@type": "Country", name: "Deutschland" },
              { "@type": "Country", name: "Oesterreich" },
              { "@type": "Country", name: "Schweiz" },
            ],
            serviceType: [
              "Generative Engine Optimization",
              "KI-Suchmaschinenoptimierung",
              "GEO Agentur",
              "LLMO",
              "AEO",
              "Prompt Monitoring",
              "KI-Optimierung",
            ],
            knowsAbout: [
              "ChatGPT Optimierung",
              "Perplexity Sichtbarkeit",
              "Google AI Overviews",
              "Google Gemini",
              "Large Language Models",
              "SEO",
              "Content Marketing",
            ],
          }),
        }}
      />
    </>
  );
}
