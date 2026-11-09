"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Zap, Activity, Gauge } from "lucide-react";

export function StormCoreReactor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [overclock, setOverclock] = useState<number>(1);
  const [fps, setFps] = useState<number>(60);
  const overclockRef = useRef<number>(1);
  overclockRef.current = overclock;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or context error", e);
      return;
    }

    // 1. Central Core: Geometric Icosahedron with Wireframe Overlay
    const coreGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // 2. Inner Quantum Sphere (Volt Glow)
    const innerGeo = new THREE.OctahedronGeometry(0.65, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // 3. Orbiting Quantum Particles Field
    const particleCount = prefersReducedMotion ? 120 : 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const voltColor = new THREE.Color(0xccff00);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? cyanColor : voltColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop with FPS Counter
    let animationFrameId: number;
    let frames = 0;
    let lastFpsUpdate = performance.now();

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // FPS Calculation
      frames++;
      if (time - lastFpsUpdate >= 1000) {
        setFps(Math.round((frames * 1000) / (time - lastFpsUpdate)));
        frames = 0;
        lastFpsUpdate = time;
      }

      const speedMultiplier = prefersReducedMotion ? 0.2 : overclockRef.current;

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      core.rotation.x += 0.004 * speedMultiplier;
      core.rotation.y += 0.007 * speedMultiplier;
      core.rotation.x += targetY * 0.01;
      core.rotation.y += targetX * 0.01;

      inner.rotation.x -= 0.008 * speedMultiplier;
      inner.rotation.y -= 0.012 * speedMultiplier;

      particles.rotation.y += 0.002 * speedMultiplier;
      particles.rotation.x = targetY * 0.2;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      innerGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] flex items-center justify-center border border-storm-border bg-storm-titanium/50 overflow-hidden group">
      {/* 3D Canvas Mount */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Mainframe Telemetry Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none select-none font-mono text-[11px] text-storm-muted">
        <div className="flex items-center gap-2 border border-storm-border px-2.5 py-1 bg-storm-titanium/80 backdrop-blur-sm">
          <Activity className="w-3.5 h-3.5 text-storm-cyan animate-pulse" />
          <span>REACTOR_CORE: <strong className="text-storm-white">ONLINE</strong></span>
        </div>
        <div className="flex items-center gap-2 border border-storm-border px-2.5 py-1 bg-storm-titanium/80 backdrop-blur-sm">
          <Gauge className="w-3.5 h-3.5 text-storm-volt" />
          <span>FPS: <strong className="text-storm-volt">{fps}</strong></span>
        </div>
      </div>

      {/* Bottom Overclock Voltage Controller Dial */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between select-none font-mono text-xs">
        <div className="border border-storm-border px-3 py-1.5 bg-storm-titanium/90 backdrop-blur-sm flex items-center gap-3">
          <span className="text-storm-muted text-[11px] flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-storm-volt" />
            CORE_VOLTAGE:
          </span>
          <div className="flex items-center gap-1">
            {[1, 2, 4].map((mult) => (
              <button
                key={mult}
                onClick={() => setOverclock(mult)}
                className={`px-2 py-0.5 text-[10px] font-bold border transition-colors ${
                  overclock === mult
                    ? "bg-storm-volt text-storm-void border-storm-volt"
                    : "border-storm-border text-storm-muted hover:text-storm-white"
                }`}
              >
                {mult}X
              </button>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex border border-storm-border px-3 py-1.5 bg-storm-titanium/90 backdrop-blur-sm text-[10px] text-storm-muted">
          <span>COORDINATES: <strong className="text-storm-cyan">WebGL 2.0 // THREE.JS</strong></span>
        </div>
      </div>
    </div>
  );
}
