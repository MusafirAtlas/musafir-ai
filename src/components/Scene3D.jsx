'use client';

import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Scene3D({ children, scrollProgress = 0, mousePosition = { x: 0, y: 0 } }) {
    return (
        <div className="fixed inset-0 -z-10 opacity-60">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
            >
                {/* Softer lighting */}
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.3} color="#dc2626" />
                <pointLight position={[-10, -10, -10]} intensity={0.2} color="#ffffff" />

                {/* Subtle fog for depth */}
                <fog attach="fog" args={['#ffffff', 8, 25]} />

                {/* Camera controller with more subtle movement */}
                <CameraRig mousePosition={mousePosition} scrollProgress={scrollProgress} />

                {children}
            </Canvas>
        </div>
    );
}

function CameraRig({ mousePosition, scrollProgress }) {
    const { camera } = useThree();

    useEffect(() => {
        // Very subtle camera movement based on mouse position
        const targetX = mousePosition.x * 0.2;
        const targetY = -mousePosition.y * 0.2;

        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (targetY - camera.position.y) * 0.03;

        // Minimal camera movement on scroll
        camera.position.z = 6 - scrollProgress * 1;

    }, [mousePosition, scrollProgress, camera]);

    return null;
}
