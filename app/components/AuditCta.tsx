"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";
import "./audit-cta.css";

export default function AuditCta() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  /* ── Open / Close ──────────────────────────────── */
  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible("Audit Modal Opened");
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    setMessage(null);
  }, []);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [close]);

  // Allow any element with data-open-audit to open the modal
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest("[data-open-audit]");
      if (trigger) {
        e.preventDefault();
        open();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  // Auto-close after success
  useEffect(() => {
    if (message?.type === "success") {
      const t = setTimeout(close, 4000);
      return () => clearTimeout(t);
    }
  }, [message, close]);

  /* ── Submit ────────────────────────────────────── */
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const data = {
      brand: (fd.get("brand") as string)?.trim(),
      domain: (fd.get("domain") as string)?.trim(),
      branche: (fd.get("branche") as string)?.trim(),
      email: (fd.get("email") as string)?.trim(),
    };

    if (!data.brand || !data.email) {
      setMessage({ text: "Bitte fülle mindestens Brand und E-Mail aus.", type: "error" });
      return;
    }

    const gdpr = (form.querySelector("#auditGdpr") as HTMLInputElement)?.checked;
    if (!gdpr) {
      setMessage({ text: "Bitte akzeptiere die Datenschutzerklärung.", type: "error" });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        setMessage({
          text: result.message || "Vielen Dank! Wir melden uns in Kürze.",
          type: "success",
        });
        form.reset();

        if (typeof window !== "undefined" && window.plausible) {
          window.plausible("Audit CTA Submitted", {
            props: { brand: data.brand, branche: data.branche || "–" },
          });
        }
      } else {
        setMessage({ text: result.error || "Etwas ist schiefgelaufen.", type: "error" });
      }
    } catch {
      setMessage({ text: "Netzwerkfehler — bitte versuche es erneut.", type: "error" });
    } finally {
      setLoading(false);
    }
  }

  /* ── Render ────────────────────────────────────── */
  return (
    <>
      {/* Floating Button */}
      <button
        id="auditFloatingBtn"
        className="audit-floating-btn"
        onClick={open}
        aria-label="Gratis GEO Audit anfordern"
      >
        <span className="audit-floating-icon">🎯</span>
        Gratis GEO Audit
      </button>

      {/* Overlay */}
      <div
        id="auditOverlay"
        className={`audit-modal-overlay${isOpen ? " active" : ""}`}
        onClick={close}
      />

      {/* Modal */}
      <div
        id="auditModal"
        className={`audit-modal${isOpen ? " active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Gratis GEO Audit Formular"
      >
        <div className="audit-modal-inner">
          {/* Close */}
          <button className="audit-modal-close" onClick={close} aria-label="Schließen">
            ✕
          </button>

          {/* Header */}
          <div className="audit-modal-header">
            <div className="audit-modal-badge">✦ Kostenlos &amp; unverbindlich</div>
            <h2>Starte jetzt kostenlos — dein AI Visibility Audit</h2>
            <p>
              Marke eingeben, Ergebnis per Mail. Kein Abo, kein Vertrag, kein Risiko.
              Inkl. AI-Readiness Score und Quick Wins.
            </p>
          </div>

          {/* Form */}
          <form id="auditForm" onSubmit={handleSubmit}>
            <div className="audit-form-grid">
              <div className="audit-form-group">
                <label htmlFor="auditBrand">
                  Brand / Firmenname <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="auditBrand"
                  name="brand"
                  placeholder="z.B. ACME GmbH"
                  required
                  autoFocus={isOpen}
                />
              </div>
              <div className="audit-form-group">
                <label htmlFor="auditDomain">Domain</label>
                <input
                  type="text"
                  id="auditDomain"
                  name="domain"
                  placeholder="z.B. acme.de"
                />
              </div>
              <div className="audit-form-group">
                <label htmlFor="auditBranche">Branche</label>
                <input
                  type="text"
                  id="auditBranche"
                  name="branche"
                  placeholder="z.B. SaaS, E-Commerce"
                />
              </div>
              <div className="audit-form-group">
                <label htmlFor="auditEmail">
                  E-Mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="auditEmail"
                  name="email"
                  placeholder="name@firma.de"
                  required
                />
              </div>
            </div>

            {/* GDPR */}
            <div className="audit-gdpr">
              <input type="checkbox" id="auditGdpr" />
              <div className="audit-gdpr-text">
                Ich bin mit der Verarbeitung meiner Daten gemäß der{" "}
                <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                  Datenschutzerklärung
                </a>{" "}
                einverstanden.
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="auditSubmitBtn"
              className="audit-submit-btn"
              disabled={loading}
            >
              <span className="audit-btn-text">
                {loading ? "Wird gesendet…" : "Sichtbarkeit checken"}
              </span>
              {loading ? (
                <span className="audit-spinner visible" />
              ) : (
                <span className="audit-btn-icon">→</span>
              )}
            </button>

            {/* Message */}
            {message && (
              <div className={`audit-message visible ${message.type}`}>
                {message.text}
              </div>
            )}
          </form>

          {/* Trust Badges */}
          <div className="audit-trust-row">
            <div className="audit-trust-item">
              <svg viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              DSGVO-konform
            </div>
            <div className="audit-trust-item">
              <svg viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
              SSL-verschlüsselt
            </div>
            <div className="audit-trust-item">
              <svg viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              Ergebnis in 24h
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Plausible type augmentation */
declare global {
  interface Window {
    plausible?: (event: string, options?: Record<string, unknown>) => void;
  }
}
