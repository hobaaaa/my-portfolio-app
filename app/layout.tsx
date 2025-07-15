import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Developer | Modern UI/UX & Supabase Expert – Deniz",
  description:
    "Discover impressive frontend solutions that prioritize user experience in my portfolio, developed with Tailwind, Supabase, and modern UI/UX focused projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} scroll-smooth bg-background text-foreground`}
      suppressHydrationWarning
    >
      <body className="antialiased font-outfit leading-8 overflow-x-hidden ">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
