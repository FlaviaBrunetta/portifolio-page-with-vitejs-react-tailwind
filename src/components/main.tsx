import { Depoimentos } from "./depoimentos";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { Projetos } from "./projetos";

export function Main() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <Nav />
        <Hero />
        <Projetos />
        <Depoimentos />
        <Footer />
      </div>
    </>
  );
}
