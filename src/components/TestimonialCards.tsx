import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I picked up a guitar for the first time at 25. The lessons are so clear that I was playing my first full song in three weeks.",
    name: "Aarav Shah",
    title: "Guitar student",
  },
  {
    quote:
      "The music theory course finally made scales and chords click for me. Everything is explained with real songs, not boring jargon.",
    name: "Meera Iyer",
    title: "Music Theory student",
  },
  {
    quote:
      "I can pause, rewind, and practice at midnight after work. That flexibility is the reason I never skipped a lesson.",
    name: "Rohan Mehta",
    title: "Piano student",
  },
  {
    quote:
      "The vocal training exercises fixed my breath control within a month. My friends noticed the difference before I did!",
    name: "Priya Nair",
    title: "Vocal Training student",
  },
  {
    quote:
      "The Ableton course took me from random loops to a complete track I'm proud to share. The instructor is super patient.",
    name: "Kabir Singh",
    title: "Music Production student",
  },
  {
    quote:
      "Songwriting felt impossible before this course. Now I write a new song almost every week, and I actually enjoy the process.",
    name: "Ananya Desai",
    title: "Songwriting student",
  },
];

function MusicSchoolTestimonial() {
  return (
    <div className="relative py-12 bg-black">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20">
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What Our Students Say
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonial;