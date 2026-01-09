'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Particles, setParticles] = useState<any>(null);
  const [loadSlim, setLoadSlim] = useState<((engine: Engine) => Promise<void>) | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadParticles = async () => {
      try {
        const [particlesModule, slimModule] = await Promise.all([
          import('react-particles').catch(() => null),
          import('tsparticles-slim').catch(() => null)
        ]);
        
        if (particlesModule && particlesModule.default && slimModule && slimModule.loadSlim) {
          setParticles(() => particlesModule.default);
          setLoadSlim(() => slimModule.loadSlim);
          setIsLoaded(true);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.warn('Particles background disabled:', error);
        setHasError(true);
      }
    };
    loadParticles();
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      if (loadSlim) {
        await loadSlim(engine);
      }
    } catch (error) {
      console.warn('Failed to initialize particles:', error);
    }
  }, [loadSlim]);

  if (hasError || !isLoaded || !Particles || !loadSlim) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={className}
      options={{
        background: {
          color: {
            value: '#0a0a0a',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.3,
              factor: 100,
              speed: 2,
              maxSpeed: 50,
              easing: 'ease-out-quad',
            },
            push: {
              quantity: 4,
              groups: [],
              default: true,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              easing: 'ease-out-quad',
              factor: 1,
              speed: 1,
              maxSpeed: 50,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
            animation: {
              enable: false,
            },
          },
          links: {
            enable: true,
            color: '#e5e5e5',
            distance: 150,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: false,
            },
            shadow: {
              blur: 5,
              color: '#ffffff',
              enable: false,
            },
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1.5,
            straight: false,
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            trail: {
              enable: false,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 150,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 1.2,
              sync: false,
              destroy: 'none',
              startValue: 'random',
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 },
            random: true,
            animation: {
              enable: false,
            },
          },
          shadow: {
            blur: 3,
            color: {
              value: '#ffffff',
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

