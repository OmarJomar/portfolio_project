import { useState, useEffect } from "react";

export function useTypewriter(text, speed = 150, pause = 5000) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let typingInterval;
    let restartTimeout;

    const startTyping = () => {
      i = 0;
      setDisplayedText("");
      typingInterval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(typingInterval);
          restartTimeout = setTimeout(startTyping, pause);
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, [text, speed, pause]);

  return displayedText;
}