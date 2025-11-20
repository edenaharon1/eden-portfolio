import React, { useState, useEffect } from "react";

export default function Typewriter({ text = "", speed = 80 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let i = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayedText}</>; // ← מחזירים טקסט רגיל, לא span
}
