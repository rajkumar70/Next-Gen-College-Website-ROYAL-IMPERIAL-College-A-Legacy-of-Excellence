import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Settings, Map as MapIcon, Layers, Maximize } from 'lucide-react';

// Building data
const buildings = [
  { id: 'academic', name: 'Main Academic Block', position: [-10, 0, -10], size: [12, 15, 12], color: '#e2e8f0' },
  { id: 'library', name: 'Central Library', position: [10, 0, -15], size: [10, 8, 10], color: '#f8fafc' },
  { id: 'innovation', name: 'Innovation Hub', position: [15, 0, 5], size: [12, 12, 8], color: '#cbd5e1' },
  { id: 'hostel-boys', name: 'Boys Hostel', position: [-20, 0, 15], size: [8, 20, 12], color: '#94a3b8' },
  { id: 'hostel-girls', name: 'Girls Hostel', position: [20, 0, 15], size: [8, 20, 12], color: '#94a3b8' },
  { id: 'admin', name: 'Admin Block', position: [0, 0, -25], size: [14, 10, 8], color: '#f1f5f9' },
  { id: 'research', name: 'Research Wing', position: [-25, 0, -5], size: [10, 12, 10], color: '#e2e8f0' },
  { id: 'auditorium', name: 'Grand Auditorium', position: [25, 0, -5], size: [15, 8, 15], color: '#f8fafc' },
  { id: 'medical', name: 'Health Center', position: [-15, 0, 25], size: [8, 6, 8], color: '#f1f5f9' },
  { id: 'engineering', name: 'School of Engineering', position: [-25, 0, -25], size: [12, 18, 12], color: '#e2e8f0' },
  { id: 'business', name: 'School of Business', position: [25, 0, -25], size: [12, 14, 12], color: '#e2e8f0' },
];

function RealisticBuilding({ data, isHovered, setHovered }: any) {
  const [w, h, d] = data.size;
  
  return (
    <group position={data.position} 
        onPointerOver={(e) => { e.stopPropagation(); setHovered(data.id); }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(null); }}>
      
      {/* Base/Foundation */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[w + 0.5, 1, d + 0.5]} />
        <meshStandardMaterial color="#555555" roughness={0.9} />
      </mesh>

      {/* Main Structure */}
      <mesh castShadow receiveShadow position={[0, h/2 + 0.5, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={data.color} roughness={0.7} />
      </mesh>
      
      {/* Roof */}
      <mesh castShadow receiveShadow position={[0, h + 0.7, 0]}>
        <boxGeometry args={[w + 0.4, 0.4, d + 0.4]} />
        <meshStandardMaterial color="#222222" roughness={0.8} />
      </mesh>

      {/* Glass Facades */}
      <mesh position={[0, h/2 + 0.5, d/2 + 0.01]}>
        <planeGeometry args={[w - 1.5, h - 1]} />
        <meshStandardMaterial color="#aaddff" opacity={0.6} transparent roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[0, h/2 + 0.5, -d/2 - 0.01]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[w - 1.5, h - 1]} />
        <meshStandardMaterial color="#aaddff" opacity={0.6} transparent roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[w/2 + 0.01, h/2 + 0.5, 0]} rotation={[0, Math.PI/2, 0]}>
        <planeGeometry args={[d - 1.5, h - 1]} />
        <meshStandardMaterial color="#aaddff" opacity={0.6} transparent roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[-w/2 - 0.01, h/2 + 0.5, 0]} rotation={[0, -Math.PI/2, 0]}>
        <planeGeometry args={[d - 1.5, h - 1]} />
        <meshStandardMaterial color="#aaddff" opacity={0.6} transparent roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Hover Outline */}
      {isHovered && (
        <mesh position={[0, h/2 + 0.5, 0]}>
          <boxGeometry args={[w + 0.6, h + 0.6, d + 0.6]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
      )}

      {/* Label */}
      {isHovered && (
        <Text
          position={[0, h + 3, 0]}
          fontSize={1.5}
          color="#0A192F"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.1}
          outlineColor="#ffffff"
        >
          {data.name}
        </Text>
      )}
    </group>
  );
}

function RealisticStudent({ pathRadius, speed, color, startAngle, pathCenter }: any) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + startAngle;
      ref.current.position.x = pathCenter[0] + Math.cos(t) * pathRadius;
      ref.current.position.z = pathCenter[1] + Math.sin(t) * pathRadius;
      ref.current.position.y = 0.9 + Math.sin(t * 15) * 0.05; // walking bob
      ref.current.rotation.y = -t; // face direction of walking
    }
  });

  return (
    <group ref={ref}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.2, 0.6, 4, 8]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ffdbac" roughness={0.5} />
      </mesh>
    </group>
  );
}

function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 2]} />
        <meshStandardMaterial color="#5c4033" roughness={0.9} />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#228b22" roughness={0.8} />
      </mesh>
      <mesh position={[0.8, 2.2, 0.5]} castShadow>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial color="#2e8b57" roughness={0.8} />
      </mesh>
      <mesh position={[-0.8, 2.8, -0.5]} castShadow>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial color="#228b22" roughness={0.8} />
      </mesh>
    </group>
  );
}

function CampusGate() {
  return (
    <group position={[0, 0, 45]}>
      {/* Pillars */}
      <mesh position={[-8, 4, 0]} castShadow>
        <boxGeometry args={[2, 8, 2]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
      </mesh>
      <mesh position={[8, 4, 0]} castShadow>
        <boxGeometry args={[2, 8, 2]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
      </mesh>
      {/* Arch */}
      <mesh position={[0, 8.5, 0]} castShadow>
        <boxGeometry args={[18, 1.5, 2]} />
        <meshStandardMaterial color="#0A192F" roughness={0.5} />
      </mesh>
      {/* Text */}
      <Text position={[0, 8.5, 1.1]} fontSize={1} color="#C5A059" anchorX="center" anchorY="middle">
        ROYAL IMPERIAL COLLEGE
      </Text>
      {/* Road through gate */}
      <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, -10]} receiveShadow>
        <boxGeometry args={[10, 30, 1]} />
        <meshStandardMaterial color="#333333" roughness={0.9} />
      </mesh>
    </group>
  );
}

function SportsGrounds() {
  return (
    <group>
      {/* Football Field & Running Track */}
      <group position={[40, 0.05, 20]}>
        {/* Track */}
        <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
          <capsuleGeometry args={[15, 20, 4, 16]} />
          <meshStandardMaterial color="#8B0000" roughness={0.9} />
        </mesh>
        {/* Field */}
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
          <boxGeometry args={[18, 30, 1]} />
          <meshStandardMaterial color="#228B22" roughness={1} />
        </mesh>
        {/* Lines */}
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, 0]}>
          <boxGeometry args={[18, 0.2, 1]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, 0]}>
          <ringGeometry args={[3, 3.2, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Cricket Ground */}
      <group position={[-40, 0.05, -20]}>
        <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
          <circleGeometry args={[25, 32]} />
          <meshStandardMaterial color="#32CD32" roughness={1} />
        </mesh>
        {/* Pitch */}
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
          <boxGeometry args={[3, 10, 1]} />
          <meshStandardMaterial color="#D2B48C" roughness={1} />
        </mesh>
      </group>

      {/* Tennis/Volleyball Courts */}
      <group position={[40, 0.05, -20]}>
        <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
          <boxGeometry args={[15, 25, 1]} />
          <meshStandardMaterial color="#4169E1" roughness={0.8} />
        </mesh>
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.01, 0]}>
          <boxGeometry args={[15, 0.2, 1]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}

function Roads() {
  return (
    <group position={[0, 0.01, 0]}>
      {/* Main vertical road */}
      <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
        <boxGeometry args={[8, 100, 1]} />
        <meshStandardMaterial color="#333333" roughness={0.9} />
      </mesh>
      {/* Main horizontal road */}
      <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
        <boxGeometry args={[100, 8, 1]} />
        <meshStandardMaterial color="#333333" roughness={0.9} />
      </mesh>
      {/* Center roundabout */}
      <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
        <circleGeometry args={[8, 32]} />
        <meshStandardMaterial color="#333333" roughness={0.9} />
      </mesh>
      <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <circleGeometry args={[4, 32]} />
        <meshStandardMaterial color="#228B22" roughness={1} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2]} />
        <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Pond() {
  return (
    <group position={[-35, 0.05, 25]}>
      <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow>
        <circleGeometry args={[15, 32]} />
        <meshStandardMaterial color="#00aaff" opacity={0.8} transparent roughness={0.1} metalness={0.5} />
      </mesh>
      {/* Small bridge */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 0.2, 16]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.9} />
      </mesh>
    </group>
  );
}

export default function CampusMapContent() {
  const [resolution, setResolution] = useState<number>(1); // 1 = Normal, 2 = High
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<number>(12); // 0-24 hours

  // Generate random students
  const students = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      pathRadius: 2 + Math.random() * 30,
      speed: 0.1 + Math.random() * 0.4,
      color: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 7)],
      startAngle: Math.random() * Math.PI * 2,
      pathCenter: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 40]
    }));
  }, []);

  // Calculate sun position based on time of day
  const sunPosition = useMemo(() => {
    const angle = ((timeOfDay - 6) / 12) * Math.PI; // 6 AM = 0, 6 PM = PI
    return [Math.cos(angle) * 100, Math.sin(angle) * 100, 0] as [number, number, number];
  }, [timeOfDay]);

  const isNight = timeOfDay < 6 || timeOfDay > 18;

  return (
    <div className="space-y-6 flex flex-col min-h-[600px] h-[calc(100vh-150px)]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-royal-navy">Interactive Campus Map</h1>
          <p className="text-slate-600">Explore the Royal Imperial College campus in real-time 3D.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 px-3 border-r border-slate-200">
            <Settings size={16} className="text-slate-400" />
            <select 
              className="text-sm font-medium text-royal-navy bg-transparent outline-none cursor-pointer"
              value={resolution}
              onChange={(e) => setResolution(Number(e.target.value))}
            >
              <option value={0.5}>Low Res</option>
              <option value={1}>Normal Res</option>
              <option value={2}>High Res</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2 px-3 border-r border-slate-200">
            <Layers size={16} className="text-slate-400" />
            <input 
              type="range" 
              min="0" 
              max="24" 
              step="1"
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(Number(e.target.value))}
              className="w-24 accent-royal-navy"
            />
            <span className="text-xs font-bold text-royal-navy w-12">{timeOfDay}:00</span>
          </div>
          
          <button className="px-3 text-royal-navy hover:text-royal-gold transition-colors flex items-center gap-1 text-sm font-bold">
            <Maximize size={16} /> Fullscreen
          </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative min-h-[400px]">
        {/* Map Legend */}
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
          <h3 className="font-bold text-royal-navy mb-2 flex items-center gap-2">
            <MapIcon size={16} /> Legend
          </h3>
          <div className="space-y-2 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#e2e8f0]"></div> Academic / Admin</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#94a3b8]"></div> Hostels</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#228B22]"></div> Sports Grounds</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#00aaff]"></div> Water Bodies</div>
          </div>
        </div>

        {/* Selected Building Info */}
        {hoveredBuilding && (
          <div className="absolute bottom-4 left-4 z-10 bg-royal-navy text-white p-4 rounded-xl shadow-xl max-w-xs animate-in fade-in slide-in-from-bottom-4">
            <h3 className="font-bold text-lg text-royal-gold mb-1">
              {buildings.find(b => b.id === hoveredBuilding)?.name}
            </h3>
            <p className="text-sm text-white/80">
              Click to view detailed floor plans and current occupancy.
            </p>
          </div>
        )}

        {/* 3D Canvas */}
        <Canvas shadows dpr={resolution} camera={{ position: [0, 40, 60], fov: 45 }}>
          <color attach="background" args={[isNight ? '#020617' : '#87CEEB']} />
          
          <Sky 
            sunPosition={sunPosition} 
            turbidity={isNight ? 0.1 : 0.6} 
            rayleigh={isNight ? 0.1 : 2} 
            mieCoefficient={0.005} 
            mieDirectionalG={0.8} 
          />
          
          <ambientLight intensity={isNight ? 0.1 : 0.4} />
          <directionalLight 
            castShadow 
            position={sunPosition} 
            intensity={isNight ? 0.05 : 1.5} 
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />

          {/* Night Lights */}
          {isNight && (
            <>
              <pointLight position={[0, 10, 0]} intensity={2} color="#C5A059" distance={50} />
              <pointLight position={[-20, 10, 15]} intensity={1.5} color="#ffffff" distance={40} />
              <pointLight position={[20, 10, 15]} intensity={1.5} color="#ffffff" distance={40} />
              <pointLight position={[0, 10, 45]} intensity={2} color="#ffffff" distance={30} />
            </>
          )}

          {/* Ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color={isNight ? '#064e3b' : '#4ade80'} roughness={1} />
          </mesh>

          <Roads />
          <SportsGrounds />
          <Pond />
          <CampusGate />

          {/* Buildings */}
          {buildings.map((b) => (
            <RealisticBuilding 
              key={b.id} 
              data={b} 
              isHovered={hoveredBuilding === b.id} 
              setHovered={setHoveredBuilding} 
            />
          ))}

          {/* Moving Students */}
          {students.map((s) => (
            <RealisticStudent 
              key={s.id} 
              pathRadius={s.pathRadius} 
              speed={s.speed} 
              color={s.color} 
              startAngle={s.startAngle} 
              pathCenter={s.pathCenter}
            />
          ))}

          {/* Trees */}
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (Math.random() - 0.5) * 150;
            const z = (Math.random() - 0.5) * 150;
            // Don't place trees on roads or buildings
            if (Math.abs(x) < 6 || Math.abs(z) < 6) return null;
            return <Tree key={`tree-${i}`} position={[x, 0, z]} />;
          })}

          <OrbitControls 
            makeDefault 
            minPolarAngle={0} 
            maxPolarAngle={Math.PI / 2 - 0.05} 
            minDistance={10} 
            maxDistance={120}
          />
        </Canvas>
      </div>
    </div>
  );
}
