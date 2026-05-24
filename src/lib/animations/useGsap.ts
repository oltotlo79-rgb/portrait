"use client";

import { useEffect, useRef, type DependencyList } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
function ensureRegistered() {
  if (registered) return;
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

type Setup = (ctx: gsap.Context) => void;

export function useGsap(setup: Setup, deps: DependencyList = []) {
  const scopeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureRegistered();
    const ctx = gsap.context(setup, scopeRef.current ?? undefined);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}

export { gsap, ScrollTrigger };
