import { Hero } from "./hero";
import { Nav } from "./nav";

export function Main() {
  return (
    <>
      <div className="bg-indigo-600">
        <Nav />
        <Hero />
      </div>
    </>
  );
}
