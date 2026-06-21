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
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundColor: "#0D1B2A",
        }}
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    </ParticlesProvider>
  );
}
