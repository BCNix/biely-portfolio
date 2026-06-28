import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import nasaParticles from "./nasa-data.json";
import "./Nasa.css";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

export default function Nasa() {
  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  const options = useMemo(() => nasaParticles, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <div className="particles-container">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    </ParticlesProvider>
  );
}
