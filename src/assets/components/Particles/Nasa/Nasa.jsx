import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import nasaParticles from "./nasa-data.json";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

export default function Nasa() {
  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  console.log("Nasa component......");

  const options = useMemo(() => nasaParticles, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </ParticlesProvider>
  );
}
