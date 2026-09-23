import { useEffect } from "react";
import "./Toast.css";

export default function Toast({ type, message, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);
  return (
    <div
      className={`toast toast-${type}`}
      role={type === "error" ? "alert" : "status"}
    >
      <p className="toast-message">{message}</p>
      <button
        type="button"
        className="toast-close"
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        &times;
      </button>
    </div>
  );
}
