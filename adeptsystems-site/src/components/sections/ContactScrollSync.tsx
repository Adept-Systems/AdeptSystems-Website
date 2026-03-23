"use client";

import { useEffect } from "react";

export function ContactScrollSync() {
  useEffect(() => {
    const shouldScroll =
      window.location.hash === "#contact" ||
      sessionStorage.getItem("scrollToContact") === "1";

    if (!shouldScroll) return;

    const timer = window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      sessionStorage.removeItem("scrollToContact");
    }, 60);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
