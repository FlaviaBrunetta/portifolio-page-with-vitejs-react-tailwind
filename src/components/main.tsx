import { Hero } from "./hero";
import { Nav } from "./nav";

export function Main() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <Nav />
        <Hero />
      </div>
    </>
  );
}
