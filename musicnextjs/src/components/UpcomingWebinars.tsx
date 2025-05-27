"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Mastering Music Theory",
      description:
        "Deep dive into scales, chords, and harmony with practical applications for all instruments.",
      link: "mastering-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn how to craft lyrics and melodies that resonate with your audience.",
      link: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Home Studio Essentials",
      description:
        "Get started with setting up and optimizing your home recording studio on a budget.",
      link: "home-studio-essentials",
      isFeatured: true,
    },
    {
      title: "Improvisation for Beginners",
      description:
        "Explore the foundations of improvisation across different genres and instruments.",
      link: "improvisation-for-beginners",
      isFeatured: true,
    },
    {
      title: "Jazz Harmony in Practice",
      description:
        "An intermediate-level session on jazz harmony, voicings, and substitutions.",
      link: "jazz-harmony-in-practice",
      isFeatured: true,
    },
    {
      title: "Live Performance Tips",
      description:
        "Discover techniques to boost stage confidence and engage your audience effectively.",
      link: "live-performance-tips",
      isFeatured: true,
    },
    {
      title: "Digital Audio Workstations 101",
      description:
        "A beginner-friendly guide to using DAWs like Logic Pro, Ableton, and FL Studio.",
      link: "digital-audio-workstations-101",
      isFeatured: true,
    },
    {
      title: "Voice Care & Techniques",
      description:
        "Understand vocal health, warm-ups, and techniques to improve your singing tone.",
      link: "voice-care-and-techniques",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            {" "}
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
