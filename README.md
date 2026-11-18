<div align="center">

# 🎵 Music School

**A modern, animated landing site for an online music school, built with Next.js 16, Tailwind CSS v4 and shadcn/ui.**

[**Live Demo**](https://music-next-js-one.vercel.app/) · [**Source Code**](https://github.com/webdev-anup/Music-NextJs)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

</div>

---

## About

Music School is a responsive multi-section website where learners can explore music courses, meet instructors, see student testimonials and get in touch. It focuses on polished UI, smooth motion and a clean component structure using the Next.js App Router.

## Features

- **Hero section** with an animated spotlight and a moving-border call to action
- **Featured courses** rendered from a JSON data source, with glowing gradient cards
- **Why choose us** section built with a sticky scroll reveal
- **Testimonials** in an infinite, auto-scrolling marquee that pauses on hover
- **Upcoming webinars** with hover-effect cards
- **Instructors** showcase with a wavy animated background and animated tooltips
- **All courses page** with interactive 3D cards for every course
- **Contact page** with a form built from shadcn/ui components
- **Floating navbar** and a multi-column footer on every page
- Fully responsive, dark-themed layout

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config) |
| UI components | shadcn/ui, Aceternity UI |
| Animation | Motion (`motion/react`) |
| Linting | ESLint |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar and fonts
│   ├── page.tsx            # Home page (all landing sections)
│   ├── courses/page.tsx    # All courses with 3D cards
│   ├── contact/page.tsx    # Contact form
│   └── globals.css         # Tailwind v4 theme, keyframes, tokens
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedCourses.tsx
│   ├── WhyChooseUs.tsx
│   ├── TestimonialCards.tsx
│   ├── UpcomingWebinars.tsx
│   ├── Instructors.tsx
│   ├── Footer.tsx
│   └── ui/                 # shadcn/ui and Aceternity UI components
├── data/
│   └── music_courses.json  # Course data
└── lib/
    └── utils.ts            # cn() class-name helper
public/
└── courses/                # Course thumbnails
```

## Getting Started

**Prerequisites:** Node.js 20 or newer and npm.

```bash
# 1. Clone the repository
git clone https://github.com/webdev-anup/Music-NextJs.git
cd Music-NextJs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Customizing the Content

**Add or edit a course:** open `src/data/music_courses.json` and add an object with `id`, `title`, `slug`, `description`, `price`, `instructor`, `isFeatured` and `image`. Set `isFeatured` to `true` to show it on the home page, and place its thumbnail in `public/courses/`.

**Change theme colors or animations:** edit the `@theme` block and keyframes in `src/app/globals.css`. Tailwind v4 uses a CSS-first setup, so there is no `tailwind.config.ts`.

## What I Learned

- Building a multi-section site with the Next.js App Router, server and client components
- Tailwind CSS v4's CSS-first configuration with `@theme` and `@custom-variant`
- Integrating shadcn/ui and Aceternity UI components into a custom design
- Creating performant animations with Motion
- Driving UI from structured JSON data
- Debugging real build errors and deploying to Vercel

## Roadmap

- [ ] Dynamic course detail pages (`/courses/[slug]`)
- [ ] Webinars listing page
- [ ] Working contact form with an email service
- [ ] Course search and filters
- [ ] Authentication and student dashboard

## Acknowledgements

- Built while following the Next.js 
- UI components from [shadcn/ui](https://ui.shadcn.com/) and [Aceternity UI](https://ui.aceternity.com/)
- Course images from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/)

## Author

**Anup Patwa** · [GitHub](https://github.com/webdev-anup)

If you like this project, consider giving it a ⭐
