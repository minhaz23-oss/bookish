import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const sans = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "Bookish | Best self improvment book review",
  description: "In this website Best self improvment books review and detailed information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
