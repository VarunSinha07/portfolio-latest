"use client";

import Section from "./section";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "@/hooks/use-is-mobile";

const certificates = [
  {
    id: 1,
    image: "/certificates/SIH25-certificate.jpeg",
    alt: "SIH 2025 Finalist Certificate",
    title: "SIH 2025 Finalist",
    description: "Smart India Hackathon 2025",
    organization: "Smart India Hackathon",
    year: "2025",
    link: "/certificates/SIH25-certificate.jpeg",
    isFirstCard: true,
  },
  {
    id: 2,
    image: "/certificates/hackathon-certificate.jpg",
    alt: "Hackathon award",
    title: "1st Runner Up",
    description: "Full Stack Development Hackathon, VIT Chennai",
    organization: null,
    year: null,
    link: "/certificates/hackathon-certificate.jpg",
    isFirstCard: true,
  },
  {
    id: 3,
    image: "/certificates/NPTEL-certificate.png",
    alt: "NPTEL Big Data Computing Certificate",
    title: "NPTEL Big Data Computing GOLD + Elite TOP 1% Certificate",
    description: null,
    organization: "NPTEL",
    year: "2025",
    link: "/certificates/NPTEL-certificate.png",
    isFirstCard: false,
  },
  {
    id: 4,
    image: "/certificates/naukri-certificate.png",
    alt: "Naukri Campus Young Turks 2025 Merit Certificate",
    title: "Naukri Campus Young Turks 2025 Merit Certificate",
    description: null,
    organization: "Naukri Campus",
    year: "2025",
    link: "https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/68d9bab67baf842bcc2d8acb",
    isFirstCard: false,
  },
  {
    id: 5,
    image: "/certificates/dsa-bootcamp-certificate.jpg",
    alt: "30 Days DSA Bootcamp",
    title: "30 Days DSA Bootcamp course",
    description: null,
    organization: "Unstop",
    year: "2025",
    link: "https://unstop.com/certificate-preview/cf624d71-4586-41bf-8ab7-27579a9ad38d",
    isFirstCard: false,
  },
  {
    id: 6,
    image: "/certificates/data-science-certificate.jpg",
    alt: "Data Science Certificate",
    title: "The Data Science Course: Complete Data Science Bootcamp 2024",
    description: null,
    organization: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-ce5f33f9-95d2-4d6e-9dea-2ffbee35f9d9/",
    isFirstCard: false,
  },
];

export default function Achievements() {
  const isMobile = useIsMobile();

  return (
    <Section
      id="achievements"
      title="Achievements & Certifications"
      className="scroll-mt-24"
      data-mobile-optimized
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
            initial={
              isMobile
                ? { opacity: 1, scale: 1, y: 0 }
                : cert.isFirstCard
                ? { opacity: 0, scale: 0.95 }
                : { opacity: 0, y: 10 }
            }
            whileInView={
              cert.isFirstCard ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.5 }}
            transition={{
              duration: isMobile ? 0.05 : 0.5,
              delay: isMobile ? 0 : index === 0 ? 0 : 0.1,
            }}
            whileHover={isMobile ? {} : { y: -4 }}
          >
            <div className="relative">
              <Image
                src={cert.image}
                alt={cert.alt}
                width={400}
                height={cert.isFirstCard ? 176 : 300}
                className="h-60 w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              {cert.description && (
                <p className="text-muted-foreground">{cert.description}</p>
              )}
              {cert.organization && cert.year && (
                <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground text-xs">
                  <span className="glass px-3 py-1 rounded-md border border-border/60">
                    {cert.organization}
                  </span>
                  <span>•</span>
                  <span className="glass px-3 py-1 rounded-md border border-border/60">
                    {cert.year}
                  </span>
                </div>
              )}
              <div className="mt-4">
                <a
                  href={cert.link}
                  className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
