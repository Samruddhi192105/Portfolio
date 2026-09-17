"use client";

import * as React from "react";

const KEY = "portfolio:site";

const isLocal = (h: string) =>
  h === "localhost" || h === "127.0.0.1";

// records the deployment hostname once per browser
export default function Analytics() {
  React.useEffect(() => {
    const host = window.location.hostname;
    if (isLocal(host)) return;

    try {
      if (localStorage.getItem(KEY) === host) return;
      localStorage.setItem(KEY, host);
    } catch {
      /* private mode */
    }
  }, []);

  return null;
}
