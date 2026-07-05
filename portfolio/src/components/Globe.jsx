import React, { useEffect, useRef, useState } from 'react';
import { geoOrthographic, geoPath } from 'd3-geo';
import * as topojson from 'topojson-client';

const Globe = () => {
  const canvasRef = useRef(null);
  const rotationRef = useRef([0, -10, 0]); // use ref instead of state
  const [worldData, setWorldData] = useState(null);
  const [scale, setScale] = useState(0); // for entrance animation
  const [opacity, setOpacity] = useState(0); // for entrance animation

  // Load world data
  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
      .then((res) => res.json())
      .then((world) => {
        const countries = topojson.feature(world, world.objects.countries);
        setWorldData(countries);
      });
  }, []);

  // Draw globe
  const drawGlobe = () => {
    const canvas = canvasRef.current;
    if (!canvas || !worldData) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rotation = rotationRef.current;

    const projection = geoOrthographic()
      .translate([250, 250])
      .rotate(rotation)
      .scale(200)
      .clipAngle(90);

    const path = geoPath(projection, ctx);

    // Clear canvas
    ctx.clearRect(0, 0, 500, 500);

    // Outer glow
    const outerGlow = ctx.createRadialGradient(250, 250, 195, 250, 250, 220);
    outerGlow.addColorStop(0, 'rgba(168,85,247,0.3)');
    outerGlow.addColorStop(1, 'rgba(168,85,247,0)');
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(250, 250, 220, 0, 2 * Math.PI);
    ctx.fill();

    // Globe gradient
    const gradient = ctx.createRadialGradient(180, 180, 0, 250, 250, 200);
    gradient.addColorStop(0, '#c084fc');
    gradient.addColorStop(0.5, '#7e22ce');
    gradient.addColorStop(1, '#1e293b');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, 2 * Math.PI);
    ctx.fill();

    // Shine effect
    const shineGradient = ctx.createRadialGradient(180, 180, 0, 180, 180, 120);
    shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
    shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = shineGradient;
    ctx.beginPath();
    ctx.arc(180, 180, 120, 0, 2 * Math.PI);
    ctx.fill();

    // Draw countries
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    worldData.features.forEach((d) => {
      ctx.beginPath();
      path(d);
      ctx.fill();
      ctx.stroke();
    });

    // Outer stroke
    ctx.strokeStyle = 'rgba(168,85,247,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, 2 * Math.PI);
    ctx.stroke();

    // Inner shadow
    const innerShadow = ctx.createRadialGradient(250, 250, 180, 250, 250, 200);
    innerShadow.addColorStop(0, 'rgba(0,0,0,0)');
    innerShadow.addColorStop(1, 'rgba(0,0,0,0.4)');
    ctx.fillStyle = innerShadow;
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, 2 * Math.PI);
    ctx.fill();
  };

  // Smooth rotation
  useEffect(() => {
    if (!worldData) return;

    let animationFrameId;

    const animate = () => {
      rotationRef.current[0] += 0.2;
      drawGlobe();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [worldData]);

  // Entrance animation
  useEffect(() => {
    let progress = 0;
    const animateEntrance = () => {
      progress += 0.02;
      setScale(Math.min(progress, 1));
      setOpacity(Math.min(progress, 1));
      if (progress < 1) requestAnimationFrame(animateEntrance);
    };
    requestAnimationFrame(animateEntrance);
  }, []);
  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 500,
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.1s, opacity 0.1s',
      }}
    >
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
};

export default Globe;
