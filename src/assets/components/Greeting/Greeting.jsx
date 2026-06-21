import { useState, useEffect } from "react";
import "./Greeting.css";

export default function Greeting() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
    const removeTimer = setTimeout(() => setVisible(false), 4300); //

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`greeting-overlay ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="greeting-name">Biely</h1>
    </div>
  );
}
