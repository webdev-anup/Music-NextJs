"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Learn from Expert Instructors",
    description:
      "Learn guitar, piano, vocals, and more from experienced musicians who have performed and taught for years. Every lesson is designed to be clear, practical, and easy to follow, whether you're picking up an instrument for the first time or sharpening advanced skills.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-cyan-500),var(--color-emerald-500))] text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Practice at Your Own Pace",
    description:
      "Pause, rewind, and replay lessons as many times as you need. Our courses fit around your schedule, so you can practice a chord progression at midnight or work on your rhythm during a lunch break. No pressure, just steady progress.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-purple-500),var(--color-pink-500))] text-white">
        Learn Your Way
      </div>
    ),
  },
  {
    title: "From Theory to Real Songs",
    description:
      "Understand scales, chords, and harmony, then put them to work right away by playing real songs. Our step-by-step lessons connect music theory with hands-on practice, so what you learn actually sticks and sounds good.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-orange-500),var(--color-yellow-500))] text-white">
        Theory Meets Practice
      </div>
    ),
  },
  {
    title: "Create and Share Your Music",
    description:
      "Go beyond playing and start creating. Learn songwriting, composition, and music production, then share your tracks with a community of learners who love music as much as you do. Your musical journey starts here.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--color-cyan-500),var(--color-emerald-500))] text-white">
        Create Your Sound
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="py-12 bg-gray-900">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;