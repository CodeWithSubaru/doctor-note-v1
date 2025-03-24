import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Cta from "./components/cta";
import Footer from "./components/footer";
import Spacer from "./components/spacer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Services />
      <Cta />
      <Spacer />
      <Footer />
    </main>
  );
}
