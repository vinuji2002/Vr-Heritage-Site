"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Presentation, MonitorPlay, Download, Eye } from "lucide-react";
import Link from "next/link";

const PRESENTATIONS = [
  {
    id: "proposal",
    title: "Proposal Presentation",
    date: "November 2025",
    description:
      "Initial pitch outlining the dual-scene VR pipeline, AI integration, and overall project feasibility for Sri Lankan heritage tourism.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    href: "https://docs.google.com/presentation/d/1jjQw102cRk8V0b-alVoKfw9fz2EZPT84/edit?usp=sharing&ouid=105922960506005686013&rtpof=true&sd=true",
  },
  {
    id: "progress-1",
    title: "Progress Presentation - 1",
    date: "January 2026",
    description:
      "Showcase of early UI/UX designs, the foundational 3D models for Dalada Maligawa and Galle Fort, and the system architecture.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "https://docs.google.com/presentation/d/1ADfqRqdgSkg7uzk3r-jdprVoCkEE7yBo/edit?usp=sharing&ouid=105922960506005686013&rtpof=true&sd=true",
  },
  {
    id: "progress-2",
    title: "Progress Presentation - 2",
    date: "March 2026",
    description:
      "Demonstration of core functionalities, including the GeoSync spatial synchronization and the Meta Quest 2 deployment testing.",
    status: "Available",
    href: "https://docs.google.com/presentation/d/1-N-IwBSI_ztj0_16h5qoTeX-RZ6RHqzD/edit?usp=sharing&ouid=105922960506005686013&rtpof=true&sd=true",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "final",
    title: "Final Presentation",
    date: "May 2026",
    description:
      "Comprehensive project defense, presenting the fully integrated VR application, performance metrics, and User Acceptance Testing results.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    href: "https://docs.google.com/presentation/d/1yGU-guB8W-6Ucm98dry_CueWubiO1zQM/edit?usp=drivesdk&ouid=105922960506005686013&rtpof=true&sd=true",
  },
];

export default function Presentations() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Fade in the section header
      gsap.from(".pres-header", {
        scrollTrigger: {
          trigger: ".pres-header",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate the presentation cards sliding up
      gsap.from(".pres-card", {
        scrollTrigger: {
          trigger: ".pres-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="pb-24 pt-40 bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
      id="presentations"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="pres-header text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-sm">
            <Presentation size={18} />
            <span>Slide Decks</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage leading-tight text-white">
            Project{" "}
            <span className="italic text-[#C5A059]">Presentations.</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-lg">
            Review the slide decks from our key academic evaluations,
            illustrating the evolution of our VR platform from concept to final
            deployment.
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="pres-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {PRESENTATIONS.map((pres) => (
            <div
              key={pres.id}
              className=" group flex flex-col bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#C5A059]/50 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              {/* 16:9 Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={pres.image}
                  alt={pres.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(197,160,89,0.5)]">
                    <MonitorPlay size={28} className="ml-1" />
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {pres.date}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#C5A059] transition-colors">
                  {pres.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-8 flex-grow">
                  {pres.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <Link
                    href={pres.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all"
                  >
                    <Eye size={16} />
                    View
                  </Link>
                  <Link
                    href={pres.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 text-white rounded-full hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
                  >
                    <Download size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
