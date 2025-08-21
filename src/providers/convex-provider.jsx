"use client";

import { ConvexProvider } from "convex/react";
import { convex } from "@/lib/convex";

export function ConvexClientProvider({ children }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}