import ParticlesBackground from "./components/particlesBackgroud";
import Navbar from "./components/Navbar";
import Info from "./components/Info";

export default function home() {
  return (
    <main className="relative min-h-screen bg-gray-900 flex flex-col">
      <ParticlesBackground />
      <Navbar />
      <div className="relative px-4 pt-20 flex-grow w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <Info />
        </div>
      </div>
    </main>
  );
}
