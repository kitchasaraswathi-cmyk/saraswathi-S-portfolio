import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#ef4444",
          },

          links: {
            color: "#ef4444",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 40,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
    />
  );
}