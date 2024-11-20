"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const webinars = [
    {
      title: "Mastering the Piano: Techniques for All Levels",
      description:
        "Join our exclusive piano webinar to learn essential techniques from beginner to advanced levels. Our expert instructors will guide you through scales, arpeggios, and practice routines to improve your skills and performance.",
      slug: "mastering-the-piano-techniques",
      isFeatured: true,
    },
    {
      title: "Vocal Training Basics: Strengthening Your Voice",
      description:
        "Discover foundational vocal techniques, breath control, and vocal exercises in this beginner-friendly webinar. Perfect for aspiring singers looking to build confidence and control in their voice.",
      slug: "vocal-training-basics",
      isFeatured: false,
    },
    {
      title: "Guitar Chords and Harmony: Enhancing Your Sound",
      description:
        "Explore guitar chords and harmony in this intermediate session designed to enhance your playing style. Learn chord progressions and harmonization tips to add depth and expression to your music.",
      slug: "guitar-chords-and-harmony",
      isFeatured: true,
    },
    {
      title: "Music Theory Essentials for Musicians",
      description:
        "This interactive webinar covers the basics of music theory, from scales and intervals to chord construction and key signatures. Perfect for musicians of all instruments who want to strengthen their understanding of music.",
      slug: "music-theory-essentials",
      isFeatured: false,
    },
    {
      title: "Drumming Workshop: Rhythm and Technique",
      description:
        "Join our drumming webinar to learn about rhythm, timing, and drumming techniques. Great for beginner and intermediate drummers looking to improve their coordination and timing on the drums.",
      slug: "drumming-workshop-rhythm-technique",
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
            Enhance your musical journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={webinars.map((webinar, index) => ({
              key: webinar.slug || index,
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-4 rounded-full border text-white bg-black hover:bg-gray-700"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
