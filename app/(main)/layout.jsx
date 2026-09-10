import React from "react";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import SmoothScroll from "@/shared/SmoothScroll";

const MainLayout = ({ children }) => {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="min-h-[calc(100vh-501px)] pb-16 lg:pb-24">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
