"use client";

import Section from "./section";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "@/hooks/use-is-mobile";

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
        <motion.div
          className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
          initial={
            isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.5 }}
          transition={{ duration: isMobile ? 0.05 : 0.5 }}
          whileHover={isMobile ? {} : { y: -4 }}
        >
          <div className="relative">
            <Image
              src="/certificates/hackathon-certificate.jpg"
              alt="Hackathon award"
              width={400}
              height={176}
              className="h-60 w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">1st Runner Up</h3>
            <p className="text-muted-foreground">
              Full Stack Development Hackathon, VIT Chennai
            </p>
            <div className="mt-4">
              <a
                href="/certificates/hackathon-certificate.jpg"
                className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.5 }}
          transition={{
            duration: isMobile ? 0.05 : 0.5,
            delay: isMobile ? 0 : 0.1,
          }}
          whileHover={isMobile ? {} : { y: -4 }}
        >
          <div className="relative">
            <Image
              src="/certificates/naukri-certificate.png"
              alt="Naukri Campus Young Turks 2025 Merit Certificate"
              width={400}
              height={300}
              className="h-60 w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">
              Naukri Campus Young Turks 2025 Merit Certificate
            </h3>
            <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <span className="glass px-3 py-1 rounded-md border border-border/60">
                Naukri Campus
              </span>
              <span>•</span>
              <span className="glass px-3 py-1 rounded-md border border-border/60">
                2025
              </span>
            </div>
            <div className="mt-4">
              <a
                href="https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/68d9bab67baf842bcc2d8acb"
                className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.5 }}
          transition={{
            duration: isMobile ? 0.05 : 0.5,
            delay: isMobile ? 0 : 0.1,
          }}
          whileHover={isMobile ? {} : { y: -4 }}
        >
          <div className="relative">
            <Image
              src="/certificates/dsa-bootcamp-certificate.jpg"
              alt="30 Days DSA Bootcamp"
              width={400}
              height={176}
              className="h-60 w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">
              30 Days DSA Bootcamp course
            </h3>
            <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <span className="glass px-3 py-1 rounded-md border border-border/60">
                Unstop
              </span>
              <span>•</span>
              <span className="glass px-3 py-1 rounded-md border border-border/60">
                2025
              </span>
            </div>
            <div className="mt-4">
              <a
                href="https://unstop.com/certificate-preview/cf624d71-4586-41bf-8ab7-27579a9ad38d"
                className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.05 : 0.5 }}
          transition={{
            duration: isMobile ? 0.05 : 0.5,
            delay: isMobile ? 0 : 0.1,
          }}
          whileHover={isMobile ? {} : { y: -4 }}
        >
          <div className="relative">
            <Image
              src="/certificates/data-science-certificate.jpg"
              alt="Data Science Certificate"
              width={400}
              height={176}
              className="h-60 w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">
              The Data Science Course: Complete Data Science Bootcamp 2024
            </h3>
            <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <span className="glass px-3 py-1 rounded-md border border-border/60">
                Udemy
              </span>
              <span>•</span>
              <span className="glass px-3 py-1 rounded-md border border-border/60">
                2024
              </span>
            </div>
            <div className="mt-4">
              <a
                href="https://www.udemy.com/certificate/UC-ce5f33f9-95d2-4d6e-9dea-2ffbee35f9d9/"
                className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
