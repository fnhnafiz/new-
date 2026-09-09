import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { DM_Sans } from "next/font/google";
import ToastProvider from "@/provider/ToastProvider";

// Fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Metadata
export const metadata = {
  metadataBase: new URL("https://therizmigration.com"),
  title: {
    default: "Riz Migration — Study abroad and migration support",
    template: "%s | Riz Migration",
  },
  description:
    "Find your course, check your visa chances and get your SOP reviewed. Free AI tools plus counselling for students applying abroad.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      {/* মোবাইলে নিচের sticky CTA bar যেন কনটেন্ট ঢেকে না ফেলে */}
      <body className="pb-[68px] xl:pb-0 " suppressHydrationWarning>
        <ReduxProvider>
          <ToastProvider />
          <main>{children}</main>
          {/* <Footer /> — পরের ধাপ */}
        </ReduxProvider>
      </body>
    </html>
  );
}
