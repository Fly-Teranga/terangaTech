"use client";

import React, { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  module: string;
  role: string;
  message: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  module: "",
  role: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 },
    );

    sectionRef.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const botField = String(new FormData(e.currentTarget).get("bot-field") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, botField }),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setLoading(false);
      setSubmitted(true);
    } catch {
      setLoading(false);
      setError("L’envoi a échoué. Veuillez réessayer ou nous écrire directement par e-mail.");
    }
  };

  if (submitted) {
    return (
      <div className="glass-dark flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-vert/20 p-12 text-center">
        <div className="bg-vert/15 animate-pulse-green mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
          <Icon name="CheckCircleIcon" size={40} className="text-vert" />
        </div>
        <h2 className="font-display mb-4 text-3xl font-semibold text-white">Demande envoyee !</h2>
        <p className="mb-8 max-w-sm text-base leading-relaxed font-light text-white/55">
          Notre equipe vous contacte sous 24 heures ouvrees pour organiser votre demo personnalisee.
        </p>
        <button type="button" onClick={() => { setForm(initialForm); setSubmitted(false); }} className="border-vert/30 text-vert hover:text-vert-light rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors">
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      <div className="reveal glass-dark rounded-3xl border border-white/8 p-8 md:p-10">
        <div className="mb-8">
          <h2 className="font-display mb-2 text-2xl font-semibold text-white">Planifier une demo gratuite</h2>
          <p className="text-sm font-light text-white/45">Reponse garantie sous 24h ouvrees.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          <p className="hidden" aria-hidden="true">
            <label>Ne pas remplir ce champ <input name="bot-field" /></label>
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Prenom *</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="form-input-dark" placeholder="Amadou" required />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Nom *</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="form-input-dark" placeholder="Diallo" required />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Societe *</label>
              <input type="text" name="company" value={form.company} onChange={handleChange} className="form-input-dark" placeholder="Air Senegal SA" required />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Votre role</label>
              <input type="text" name="role" value={form.role} onChange={handleChange} className="form-input-dark" placeholder="Directeur Digital" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Email professionnel *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input-dark" placeholder="amadou@airsn.sn" required />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Telephone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-input-dark" placeholder="+221 77 000 00 00" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Module d&apos;interet *</label>
            <select
              name="module"
              value={form.module}
              onChange={handleChange}
              className="form-input-dark"
              style={{ color: form.module ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)" }}
              required
            >
              <option value="" style={{ background: "#0D1409" }}>Selectionner un module</option>
              <option value="billetterie" style={{ background: "#0D1409" }}>Billetterie Aerienne SaaS</option>
              <option value="ia" style={{ background: "#0D1409" }}>Logiciels Aeronautiques &amp; IA</option>
              <option value="assuretech" style={{ background: "#0D1409" }}>AssureTech Voyage SaaS</option>
              <option value="all" style={{ background: "#0D1409" }}>Les 3 modules (solution complete)</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/35">Votre message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="form-input-dark resize-none" placeholder="Decrivez votre projet, vos besoins ou vos questions..." />
          </div>

          {error && <p role="alert" className="rounded-xl border border-rouge/30 bg-rouge/10 px-4 py-3 text-sm text-white/85">{error}</p>}

          <button type="submit" disabled={loading} className="bg-vert hover:bg-vert-light hover:shadow-vert flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Icon name="PaperAirplaneIcon" size={16} />
                Envoyer ma demande de demo
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
