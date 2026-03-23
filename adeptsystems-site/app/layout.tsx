import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Adept Systems",
    template: "%s | Adept Systems",
  },
  description:
    "Adept Systems builds applied AI products, workflow tools, and implementation frameworks.",
  icons: {
    icon: [
      { url: "/AdeptSystemsLogoColorRounded.png?v=1", type: "image/png" },
    ],
    shortcut: "/AdeptSystemsLogoColorRounded.png?v=1",
    apple: "/AdeptSystemsLogoColorRounded.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(d?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`,
          }}
        />
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
