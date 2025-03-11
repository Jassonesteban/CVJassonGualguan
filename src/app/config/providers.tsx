"use client";

import {CvProvider} from "../context/CVcontext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CvProvider>{children}</CvProvider>;
}