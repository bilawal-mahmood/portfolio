'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const skills = [
  'Unity (C#)', 'AR Foundation', 'Vuforia', 'XR Development', 'Photon Multiplayer',
  'Physics-based Prototyping', 'Game Mechanics Design', 'BIM Integration',
  'Unity Editor Scripting', 'Tool Development', 'C# Programming', 'Firebase',
  'Project Management', 'Risk Management', 'Research', 'Construction Engineering', 'Geological Engineering'
];

export default function AboutPage() {
    return (
      <div className="space-y-12 min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-800 text-white">
        <Navbar />
        <section className="pt-24 text-center px-6">
          <Avatar className="w-40 h-40 mx-auto mb-6 shadow-lg border-4 border-primary">
            <AvatarFallback className="text-5xl">BM</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-headline text-primary">About Me</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-body leading-relaxed">
            My name is Bilawal Mahmood. I am a dedicated professional with a diverse background in engineering, research, and academia. My experience spans from geotechnical engineering and advanced research in construction technology to teaching project management and developing XR solutions. I am passionate about leveraging technology to solve complex problems and drive innovation.
          </p>
        </section>
  
        <section className="animate-fade-in px-6" style={{ animationDelay: '0.2s' }}>
          <Card className="shadow-lg bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center font-headline text-2xl text-primary">
                <Code className="mr-2 h-6 w-6 text-accent" /> My Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" className="text-base px-3 py-1 font-body bg-accent text-accent-foreground hover:bg-accent/80">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
  
        <div className="grid md:grid-cols-2 gap-8 px-6">
          {/* Education */}
          <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="h-full shadow-lg bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center font-headline text-2xl text-primary">
                  <GraduationCap className="mr-2 h-6 w-6 text-accent" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-gray-300">
                <div>
                  <h3 className="font-semibold text-xl">Doctor of Philosophy (MS leading Ph.D. Integrated Program)</h3>
                  <p className="text-muted-foreground">Construction Engineering and Management</p>
                  <p className="text-muted-foreground">Hanyang University, Seoul, South Korea (March 2017 - August 2021)</p>
                  <p className="text-base text-muted-foreground mt-1 pl-2">
                    Dissertation: “Reality Technology-Based Spatial and Temporal Information Visualization of Onsite Resources for Automating the Construction Monitoring.”
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Bachelor of Science in Engineering</h3>
                  <p className="text-muted-foreground">B.Sc. Geological Engineering</p>
                  <p className="text-muted-foreground">University of Engineering and Technology Lahore, Pakistan (September 2009 - August 2013)</p>
                </div>
              </CardContent>
            </Card>
          </section>
  
          {/* Experience */}
          <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="h-full shadow-lg bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center font-headline text-2xl text-primary">
                  <Briefcase className="mr-2 h-6 w-6 text-accent" /> Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 font-body text-gray-300">
                <div>
                  <h3 className="font-semibold text-xl">Assistant Professor, Visiting Faculty</h3>
                  <p className="text-muted-foreground">COMSATS Lahore, Management Science department (Sept 2024 – Jan 2025)</p>
                  <ul className="list-disc list-inside text-base text-muted-foreground mt-1 pl-2">
                    <li>Taught Risk Management and Project Management to master’s degree students.</li>
                    <li>Taught Project Planning and Management to Computer Engineering students.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Postdoctoral Researcher</h3>
                  <p className="text-muted-foreground">Korea National University of Transportation, Uiwang, South Korea (July 2023 – June 2024)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Postdoctoral Researcher</h3>
                  <p className="text-muted-foreground">Hanyang University, Seoul, South Korea (Dec 2021 – Nov 2022)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Graduate Research Assistant</h3>
                  <p className="text-muted-foreground">Hanyang University, Seoul, South Korea (Construction informatics and computing lab) (March 2018 – Aug. 2021)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Lab Engineer</h3>
                  <p className="text-muted-foreground">University of South Asia, Lahore, Pakistan (Oct 2015 – Jan 2017)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Geotechnical Engineer</h3>
                  <p className="text-muted-foreground">The Driller, Lahore, Pakistan (May 2015 – Sept 2015)</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
  
        <section className="text-center animate-fade-in pb-12" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="font-body bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">(Note: Add your resume as resume.pdf to the /public folder.)</p>
        </section>
      </div>
    );
  }
  