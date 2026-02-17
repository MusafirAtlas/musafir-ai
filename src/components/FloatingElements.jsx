'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingElements({ scrollProgress = 0 }) {
    return (
        <>
            <FloatingShape
                geometry={<Torus args={[1, 0.3, 16, 32]} />}
                position={[-3, 2, -2]}
                rotation={[0.5, 0, 0]}
                speed={0.3}
                scrollProgress={scrollProgress}
            />

            <FloatingShape
                geometry={<Sphere args={[0.8, 32, 32]} />}
                position={[3, -1, -3]}
                speed={0.5}
                scrollProgress={scrollProgress}
                emissive="#dc2626"
            />

            <FloatingShape
                geometry={<RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} />}
                position={[-2, -2, -4]}
                rotation={[0.3, 0.3, 0]}
                speed={0.4}
                scrollProgress={scrollProgress}
            />
        </>
    );
}

function FloatingShape({ geometry, position, rotation = [0, 0, 0], speed = 1, scrollProgress, emissive = null }) {
    const meshRef = useRef();

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;

        // Floating motion
        meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.3;
        meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.2;

        // Gentle rotation
        meshRef.current.rotation.x = rotation[0] + time * 0.1 * speed;
        meshRef.current.rotation.y = rotation[1] + time * 0.15 * speed;

        // Parallax based on scroll
        meshRef.current.position.z = position[2] + scrollProgress * 1.5;
    });

    return (
        <mesh ref={meshRef} position={position}>
            {geometry}
            <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.8}
                roughness={0.2}
                emissive={emissive || "#333333"}
                emissiveIntensity={emissive ? 0.4 : 0.1}
                transparent
                opacity={0.7}
            />
        </mesh>
    );
}
