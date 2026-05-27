"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type TypewriterProps = {
  /** The string to type out. */
  text: string;
  /** ms to wait before typing starts. Default: 0. */
  initialDelayMs?: number;
  /** ms between characters. Default: 90. */
  charDelayMs?: number;
  /** Tailwind classes for the outer block / typed text. */
  className?: string;
  /** Show a blinking cursor block at the end. Default: true. */
  cursor?: boolean;
  /** Tailwind classes applied to the cursor element. */
  cursorClassName?: string;
  /** Keep the cursor blinking after typing completes. Default: true. */
  cursorPersists?: boolean;
};

/**
 * Type-character-by-character reveal with optional blinking cursor.
 * Respects prefers-reduced-motion: renders the full string immediately.
 *
 * The typed text reserves its full width on first paint to avoid
 * layout shift while characters are added (the rendered text is
 * absolutely positioned over an invisible placeholder).
 */
export function Typewriter({
  text,
  initialDelayMs = 0,
  charDelayMs = 90,
  className,
  cursor = true,
  cursorClassName,
  cursorPersists = true,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(reduceMotion ? text.length : 0);
  const [done, setDone] = useState(reduceMotion);
  const startedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) return; // initial useState already shows full text
    if (startedRef.current) return;
    startedRef.current = true;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          intervalId = null;
          setDone(true);
        }
      }, charDelayMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, initialDelayMs, charDelayMs, reduceMotion]);

  const showCursor = cursor && (cursorPersists || !done);

  return (
    <span className={cn("relative inline-block", className)} aria-label={text}>
      {/* Invisible full-width placeholder reserves space — prevents layout shift */}
      <span aria-hidden className="invisible whitespace-pre">
        {text}
        {cursor ? "_" : ""}
      </span>
      {/* Visible typed content over the placeholder */}
      <span
        aria-hidden
        className="absolute inset-0 inline-flex items-baseline whitespace-pre"
      >
        <span>{text.slice(0, shown)}</span>
        {showCursor ? (
          <motion.span
            className={cn(
              "ml-[0.08em] inline-block h-[0.78em] w-[0.46em] translate-y-[0.04em] bg-current align-middle",
              cursorClassName,
            )}
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 1.1,
              times: [0, 0.5, 0.51, 1],
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ) : null}
      </span>
    </span>
  );
}
