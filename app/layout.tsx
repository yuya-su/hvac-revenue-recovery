import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recoverly | Revenue recovery for HVAC estimates",
  description: "Find the revenue hiding in your replacement estimate process."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
