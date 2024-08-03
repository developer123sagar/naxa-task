import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
