"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus((data.msg as string) || "Thanks! We'll be in touch.");
        form.reset();
      } else {
        setStatus((data.error as string) || "Something went wrong.");
      }
    } catch {
      setStatus("Network error. Is the backend running?");
    }
  }

  return (
    <main>
      <section className="section-card contact-card">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          It’s easy to contact Everyday Interiors. Fill out the form and we’ll get back to you soon,
          or call us at <a href="tel:+17345364022">734-536-4022</a>.
        </p>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Your full name" name="name" required />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder = "you@example.com" name="email" type="email" required />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" placeholder="(###) ###-####" name="phone" required />
          </div>

          <div className="form-field form-field--full">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can we help?" name="message" rows={6} required />
          </div>

          <div className="form-actions">
            <button type="submit" className="call-btn">Send</button>
          </div>

          {status && <p role="status" style={{ textAlign: "center", marginTop: 12 }}>{status}</p>}
        </form>
      </section>
    </main>
  );
}
