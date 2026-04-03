import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const Scene = () => {
  const starsRef = useRef<THREE.Points>(null!);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    // Subtle rotation
    if (starsRef.current) {
      starsRef.current.rotation.y = a * 0.01;
      starsRef.current.rotation.x = a * 0.005;

      const twinkle = Math.sin(a * 2) * 0.5 + 1;

      starsRef.current.scale.setScalar(twinkle);
    }
  });

  const nebulaTexture = useMemo(() => {
    if (typeof document === 'undefined') return null; // SSR safety

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    // gradient.addColorStop(0, 'rgba(100, 50, 255, 0.5)');
    // gradient.addColorStop(0.5, 'rgba(255, 50, 50, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }, []);

  return (
    <>
      <color attach="background" args={['#020208']} />
      <Stars
        ref={starsRef}
        radius={100}
        depth={200}
        count={5000}
        factor={5}
        saturation={0}
        fade
        speed={0.5}
      />
      {/* 3. Render nebula only if texture exists */}
      {nebulaTexture && (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[0, 0, -10]}>
            <planeGeometry args={[20, 20]} />
            <meshBasicMaterial
              map={nebulaTexture}
              transparent
              opacity={0.4}
              depthWrite={false}
            />
          </mesh>
        </Float>
      )}
    </>
  );
};

// 4. Corrected Export Syntax
export default function Background() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none', // Ensures background doesn't block clicks on your links
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene />
      </Canvas>
    </div>
  );
}
