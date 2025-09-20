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
        
        <main>{children}</main>

        {/* BLANK FOOTER */}
      </body>
    </html>
  );
}
