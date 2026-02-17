'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 1500, scrollProgress = 0 }) {
    const mesh = useRef();

    // Generate particle positions with better distribution
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 25;
            const y = (Math.random() - 0.5) * 25;
            const z = (Math.random() - 0.5) * 25;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [count]);

    // Animate particles with more subtle motion
    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.elapsedTime;
        const positions = mesh.current.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
            // Very subtle floating motion
            positions[i + 1] += Math.sin(time * 0.5 + positions[i]) * 0.0005;

            // Minimal scroll-based movement for parallax effect
            positions[i + 2] += scrollProgress * 0.005;

            // Reset particles that go too far
            if (positions[i + 2] > 12) {
                positions[i + 2] = -12;
            }
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;

        // Very gentle rotation
        mesh.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#dc2626"
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
