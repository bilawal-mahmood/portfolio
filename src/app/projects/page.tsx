'use client';

import Navbar from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import type { Project } from '@/types';

const projectsData: Project[] = [
  {
    id: 'webar-tap-place',
    title: 'WebAR: QR Code to AR Scene',
    description: 'Web-based AR experience that launches from a QR code. Users can tap to place 3D objects in their environment. Animations play directly in the browser via WebAR.',
    videoUrl: 'https://www.youtube.com/embed/D0sYAvgQe38',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "WebAR tap place" },
    tags: ['WebAR', 'Three.js', 'AR.js', 'Browser-based AR', 'Mobile'],
  },
  {
    id: 'ar-balloon-game',
    title: 'AR Balloon Popping Game',
    description: 'A fun and engaging Augmented Reality game where players pop virtual balloons in their physical space, built with Unity and AR Foundation.',
    videoUrl: 'https://www.youtube.com/embed/0zJ9bxCpgIU',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "AR game" },
    tags: ['AR Foundation', 'Unity', 'C#', 'Mobile AR', 'Game Development'],
  },
  {
    id: 'interactive-ar-animals',
    title: 'Interactive AR Animals',
    description: 'An Augmented Reality application featuring interactive 3D animal models that come to life in the real world using Unity and AR Foundation.',
    videoUrl: 'https://www.youtube.com/embed/vLvv5raTbFs',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "AR animals" },
    tags: ['AR Foundation', 'Unity', 'C#', 'Mobile AR', 'Interactive'],
  },
  {
    id: 'ar-bim-viewer',
    title: 'AR BIM Viewer',
    description: 'An augmented reality application for visualizing Building Information Models (BIM) on-site, enhancing construction and design workflows.',
    videoUrl: 'https://www.youtube.com/embed/irecrU8kkRs',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "AR construction" },
    tags: ['AR Foundation', 'Unity', 'C#', 'BIM', 'XR', 'Mobile AR'],
  },
  {
    id: 'marker-ar-bim',
    title: 'Marker based AR BIM',
    description: 'Augmented Reality application using marker tracking to overlay Building Information Models (BIM) onto physical markers, facilitating on-site visualization and interaction.',
    videoUrl: 'https://www.youtube.com/embed/2JiHVFfFLuM',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "AR marker BIM" },
    tags: ['AR', 'BIM', 'Unity', 'Marker Tracking', 'Vuforia'],
  },
  {
    id: 'excavator-pose-vr',
    title: 'Image Based Excavator 3D Pose Estimation and VR Visualization',
    description: 'A project demonstrating 3D pose estimation of an excavator from images, visualized in a Virtual Reality environment using Unity.',
    videoUrl: 'https://www.youtube.com/embed/HncZP-jLKac',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "excavator VR" },
    tags: ['Computer Vision', 'VR', 'Unity', '3D Pose Estimation', 'C#'],
  },
  {
    id: 'unity-animation-tool',
    title: 'Unity Animation Tool',
    description: 'A custom editor tool developed within Unity to streamline animation workflows for game characters, including blending and sequencing.',
    videoUrl: 'https://www.youtube.com/embed/e63TvgYyV_Q',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "software interface" },
    tags: ['Unity', 'C#', 'Editor Scripting', 'Animation', 'Tool Development'],
  },
  {
    id: 'multiplayer-mafia-game',
    title: 'Multiplayer Mafia Game (Photon)',
    description: 'A classic Mafia social deduction game built with Unity and Photon for real-time multiplayer gameplay, featuring role assignments and game state management.',
    videoUrl: 'https://www.youtube.com/embed/dBQrwFAZOAQ',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "gameplay screen" },
    tags: ['Unity', 'C#', 'Photon', 'Multiplayer', 'Game Development'],
  },
  {
    id: 'unity-flight-simulator',
    title: 'Unity Flight Simulator',
    description: 'A physics-based flight simulator developed in Unity, offering realistic flight dynamics, cockpit controls, and diverse weather conditions.',
    videoUrl: 'https://www.youtube.com/embed/qSsE69i-2ak',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "flight simulation" },
    tags: ['Unity', 'C#', 'Physics', 'Simulation', '3D Modeling'],
  },
  {
    id: 'jumping-2d-game',
    title: 'Jumping 2D Game with Rigid Body Mechanics',
    description: 'A platformer-style 2D game using Unity’s rigid body physics to enable realistic jumping, falling, and shelf-based movement.',
    videoUrl: 'https://www.youtube.com/embed/p1VKC6h2xjI',
    videoPlaceholder: { width: 1280, height: 720, aiHint: "2D jumping game" },
    tags: ['Unity', 'C#', '2D Game', 'Platformer', 'Physics'],
  },
];

export default function ProjectsPage() {
    return (
      <div className="space-y-12">
        <Navbar />
        <section className="animate-fade-in px-4 pt-24 pb-12 min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-800 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-headline text-primary">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto font-body">
            Here is a selection of projects I have worked on, demonstrating my skills in Unity, AR, and other technologies. Each project reflects my commitment to quality and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
