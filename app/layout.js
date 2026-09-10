import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import ToastProvider from "@/provider/ToastProvider";
import { DM_Sans } from "next/font/google";

import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import SmoothScroll from "@/shared/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Riz Migration",
    template: "%s | Riz Migration",
  },
  description: "Study abroad and migration support.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="pb-[68px] xl:pb-0" suppressHydrationWarning>
        <ReduxProvider>
          <ToastProvider />
          <SmoothScroll />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
