"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicSchoolTestimonies = [
  {
    quote:
      "This music school transformed my passion into purpose. The instructors truly care and pushed me beyond what I thought was possible.",
    name: "Sophia Martinez",
    title: "Vocal Performance Student",
  },
  {
    quote:
      "The courses are well-structured and the learning environment is incredibly inspiring. I've grown so much as a jazz pianist since joining.",
    name: "Liam Chen",
    title: "Advanced Jazz Piano Student",
  },
  {
    quote:
      "As a working parent, the flexibility of online lessons made it easy to pursue my lifelong dream of learning the guitar. Highly recommended!",
    name: "Priya Desai",
    title: "Adult Beginner Guitarist",
  },
  {
    quote:
      "The hands-on experience with live performances and studio recordings gave me the confidence to start my own band.",
    name: "Jackson Reid",
    title: "Music Production & Performance Graduate",
  },
  {
    quote:
      "From the friendly staff to the modern facilities, everything about this school makes it a perfect place to learn and grow musically.",
    name: "Emily Thompson",
    title: "Teen Violin Program Student",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* ✅ Foreground content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Hear our Harmony: Voices of success
        </h2>
        <InfiniteMovingCards
          items={MusicSchoolTestimonies}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
