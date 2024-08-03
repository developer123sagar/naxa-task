import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
