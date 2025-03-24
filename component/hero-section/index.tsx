"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import "./globals.scss"

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="hero">
      <Image
        src="/icons/hero-background.gif"
        width={1000}
        height={500}
        alt="background"
      />
      <div>
        <h2>Welcome to Caregivers Training and Internship Institute</h2>
        <div>
          Transform lives through professional caregiving education. Join our
          accredited programs and become a certified caregiver today.
        </div>
        <div>
          <Link href="">
            <button aria-label="Explore our programs">Explore our programs</button>
          </Link>
          <button onClick={() => setShowVideo(!showVideo)} aria-label="Watch video">
            {showVideo ? "Close video" : "Watch video"}
          </button>

          <div>
            {showVideo && (
              <iframe
                src="https://www.youtube.com/embed/7fZPkt-ogSw?si=20bbhP-36mZBpRz3"
                title="Introduction to Caregivers Training"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
