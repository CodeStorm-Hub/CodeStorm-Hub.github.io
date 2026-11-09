"use client";

import React, { useState, useEffect, useRef } from "react";

interface TextScramblerProps {
  text: string;
  className?: string;
  trigger?: "hover" | "always" | "click";
  speed?: number;
  scrambleChars?: string;
  as?: React.ElementType;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#________ABCDEF0123456789";

export function TextScrambler({
  text,
  className = "",
  trigger = "hover",
  speed = 30,
  scrambleChars = DEFAULT_CHARS,
  as: Component = "span",
}: TextScramblerProps) {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = text.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current!);
        setDisplayText(text);
        isScrambling.current = false;
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (trigger === "hover") scramble();
  };

  const handleClick = () => {
    if (trigger === "click") scramble();
  };

  return (
    <Component
      className={`inline-block cursor-default select-none font-mono ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {displayText}
    </Component>
  );
}
