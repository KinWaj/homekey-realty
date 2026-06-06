"use client";

import { useState } from "react";

const initialState = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | null

  function validate(data) {
    const next = {};

    const name = data.name.trim();
    if (!name) {
      next.name = "Please enter your name.";
    } else if (name.length < 2) {
      next.name = "Name must be at least 2 characters.";
    }

    const email = data.email.trim();
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      next.email = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!data.message.trim()) next.message = "Please enter a message.";

    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setErrors({});
    setValues(initialState);
    setStatus("success");
  }

  const fieldError = (name) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1 text-xs text-red-600" role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="contact" className="bg-surface-alt py-20 sm:py-24">
      <div className="container-page">
        <h2 className="section-title">Contact</h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Address
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                21 Valentin Rapids Apt. 335
                <br />
                New Jersey, New York, USA
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                <a href="mailto:info@company.com" className="hover:text-brand">
                  info@company.com
                </a>
                <br />
                <a href="tel:+12435769802" className="hover:text-brand">
                  +1 (243) 576-98-02
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="field-input"
                />
                {fieldError("name")}
              </div>
              <div>
                <label htmlFor="email" className="field-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="field-input"
                />
                {fieldError("email")}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="field-label">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={values.company}
                onChange={handleChange}
                className="field-input"
              />
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="field-input resize-y"
              />
              {fieldError("message")}
            </div>

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="btn-primary">
                Submit
              </button>
              {status === "success" && (
                <p className="text-sm font-medium text-green-600" role="status">
                  Thanks — your message has been sent!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
