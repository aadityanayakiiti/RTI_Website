import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "College RTI Portal",
  description: "Right to Information section for the college.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* BLANK HEADER */}
        <header className="h-16 bg-gray-100 border-b sticky top-0 z-20"></header>
        
        <main>{children}</main>

        {/* BLANK FOOTER */}
        <footer className="h-16 bg-gray-100 border-t mt-12"></footer>
      </body>
    </html>
  );
}
