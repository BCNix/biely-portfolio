import { useLocation } from "react-router";
import { useCallback, useState } from "react";
import Toast from "../../components/Toast/Toast";
import "./Contact.css";

export default function Contact() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const Heading = isHome ? "h2" : "h1";

  const [status, setStatus] = useState("idle");
  const closeToast = useCallback(() => setStatus("idle"), []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-section">
      <Heading
        className={`style-heading ${isHome ? "secondary-heading" : "primary-heading"}`}
      >
        Get in <span className="accent-heading">Touch</span>
      </Heading>

      {(status === "success" || status === "error") && (
        <Toast
          type={status}
          message={
            status === "success"
              ? "Thanks for reaching out. I'll get back to you soon."
              : "Your message wasn't sent. Please try again."
          }
          onClose={closeToast}
        />
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="botcheck"
          className="honeypot"
          tabIndex="-1"
          autoComplete="off"
        />
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@domain.com"
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Hi Biely, I'd love to work with you on...."
            required
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
