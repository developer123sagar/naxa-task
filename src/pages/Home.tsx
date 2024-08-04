import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
