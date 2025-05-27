"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function WhyChooseUs() {
  const musicSchoolContent = [
    {
      title: "Why Choose Our Music School?",
      description:
        "Our music school stands out with a blend of passionate educators, personalized instruction, and a supportive community. Whether you're pursuing a professional music career or learning for personal enrichment, we provide the guidance and resources to help you grow musically and creatively.",
    },
    {
      title: "Programs for All Skill Levels",
      description:
        "We offer a wide range of programs catering to absolute beginners, intermediate learners, and advanced musicians. From instrument fundamentals to complex music theory and performance techniques, our courses are designed to nurture talent at every stage.",
    },
    {
      title: "Performance & Collaboration Opportunities",
      description:
        "Students gain valuable real-world experience through regular recitals, ensemble performances, and recording sessions. These opportunities help build stage confidence, foster teamwork, and prepare students for a future in the music industry.",
    },
    {
      title: "Learn from Industry Professionals",
      description:
        "Our instructors are accomplished musicians, composers, and producers with years of professional experience. They bring a wealth of knowledge and mentorship, helping students understand both the art and business of music.",
    },
    {
      title: "Modern Facilities & Online Access",
      description:
        "Our state-of-the-art facilities include soundproof practice rooms, recording studios, and digital workstations. We also offer flexible online classes, making high-quality music education accessible from anywhere in the world.",
    },
  ];

  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
