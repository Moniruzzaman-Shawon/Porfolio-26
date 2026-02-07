"use client";

import { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  strings: string[];
}

export default function TypingEffect({ strings }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const stringIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function tick() {
      const current = strings[stringIndex.current];

      if (!isDeleting.current) {
        if (charIndex.current < current.length) {
          charIndex.current += 1;
          setDisplayText(current.slice(0, charIndex.current));
          timeoutRef.current = setTimeout(tick, 80);
        } else {
          // Pause at end of word, then start deleting
          timeoutRef.current = setTimeout(() => {
            isDeleting.current = true;
            tick();
          }, 2200);
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current -= 1;
          setDisplayText(current.slice(0, charIndex.current));
          timeoutRef.current = setTimeout(tick, 40);
        } else {
          // Move to next string
          isDeleting.current = false;
          stringIndex.current = (stringIndex.current + 1) % strings.length;
          timeoutRef.current = setTimeout(tick, 400);
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 400);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [strings]);

  return (
    <span className="inline-flex items-center">
      <span>{displayText}</span>
      <span className="inline-block w-0.5 h-[1.2em] bg-accent animate-blink ml-0.5" />
    </span>
  );
}
