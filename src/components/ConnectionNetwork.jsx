'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ConnectionNetwork({ nodeCount = 30, scrollProgress = 0, sectionProgress = 0 }) {
    const linesRef = useRef();
    const nodesRef = useRef();

    // Generate node positions
    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < nodeCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const radius = 3 + Math.random() * 2;

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, [nodeCount]);

    // Generate connections between nearby nodes
    const connections = useMemo(() => {
        const lines = [];
        const maxDistance = 2;

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = nodes[i].distanceTo(nodes[j]);
                if (distance < maxDistance) {
                    lines.push(nodes[i], nodes[j]);
                }
            }
        }

        return lines;
    }, [nodes]);

    // Animate
    useFrame((state) => {
        if (!nodesRef.current) return;

        const time = state.clock.elapsedTime;

        // Gentle rotation
        nodesRef.current.rotation.y = time * 0.1 + scrollProgress * 0.5;
        nodesRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;

        // Scale based on section progress (for reveal animation)
        const targetScale = sectionProgress;
        nodesRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    });

    return (
        <group ref={nodesRef}>
            {/* Connection Lines */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={connections.length}
                        array={new Float32Array(connections.flatMap(v => [v.x, v.y, v.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#b91c1c"
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>

            {/* Nodes */}
            {nodes.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial
                        color="#dc2626"
                        emissive="#dc2626"
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
}
