"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory, from notes and scales to chords and harmony.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Songwriting Secrets",
      description:
        "Turn a simple idea into a complete song with strong melodies, lyrics, and structure.",
      slug: "songwriting-secrets",
      isFeatured: true,
    },
    {
      title: "Guitar Tips for Beginners",
      description:
        "Learn chords, strumming patterns, and practice habits that help you play your first songs faster.",
      slug: "guitar-tips-for-beginners",
      isFeatured: true,
    },
    {
      title: "Vocal Warmups and Breath Control",
      description:
        "Protect your voice and improve your range with simple daily warmup routines.",
      slug: "vocal-warmups-and-breath-control",
      isFeatured: true,
    },
    {
      title: "Music Production 101",
      description:
        "A live walkthrough of building a beat, layering sounds, and mixing your first track.",
      slug: "music-production-101",
      isFeatured: true,
    },
    {
      title: "Building a Career in Music",
      description:
        "Practical advice on performing, teaching, and sharing your music online as a beginner.",
      slug: "building-a-career-in-music",
      isFeatured: false,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className=" text-base text-teal-600 font-semibold tracking-wide uppercase">
            Upcoming Webinars`
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Stay updated with our upcoming webinars and events.
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-300"
          >
            view all webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
