import { Geist, Geist_Mono as geistMono } from "next/font/google";
import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

const geist = Geist({ subsets: ["latin"] });
const mono = geistMono({ subsets: ["latin"] });

export default function SearchLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <SearchHeader />
        {children}
      </body>
    </html>
  );
}
