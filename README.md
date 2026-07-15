# Aproma Energy Solutions (Pvt) Ltd — Corporate Website

A modern, fully responsive corporate website for a Sri Lankan solar energy company,
built with React + Vite, Tailwind CSS, Framer Motion, React Router, Swiper and
React Helmet Async.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    layout/     Navbar (sticky + mega menu), Footer, Layout shell, ScrollToTop
    ui/         Button, SectionTitle, PageHeader, Breadcrumb, Accordion, Counter, SEO
    cards/      ServiceCard, ProjectCard, BlogCard
    sections/   Hero, Stats, CTA, Timeline, Gallery, TestimonialSlider,
                PartnerSlider, ContactForm
  data/         All placeholder content (services, projects, case studies,
                blogs, FAQs, team, jobs, partners, stats)
  hooks/        useScrollPosition
  pages/        One file per route; ServiceDetail / CaseStudyDetail / BlogDetail
                are data-driven dynamic pages
  routes/       AppRoutes (lazy-loaded, code-split routes)
  styles/       Tailwind entry + shared component classes
  utils/        Framer Motion animation variants
```

## Replacing placeholders

- **Logo** — swap the icon + wordmark in `Navbar.jsx` and `Footer.jsx`.
- **Images** — all photos are Unsplash placeholders; URLs live in `src/data/*`.
- **Client / partner / certification logos** — placehold.co URLs in `src/data/site.js`.
- **Copy** — every heading, paragraph and FAQ is in `src/data/`, not hard-coded in pages.
- **Forms** — `ContactForm.jsx` and the careers `ApplicationForm` simulate submission;
  wire the `handleSubmit` handlers to your backend or email API.
- **Google Maps** — replace the placeholder blocks in `Contact.jsx` and `Footer.jsx`
  with a real `<iframe>` embed.

## Features

- Sticky glassmorphic navbar with a Services mega menu and mobile drawer
- Full-screen animated hero with parallax, floating stats and an animated wave divider
- Infinite logo marquees, testimonial carousel (Swiper), animated counters (CountUp)
- Project filtering with load-more; blog search, categories and pagination
- Per-page SEO (title, description, keywords, Open Graph) via React Helmet Async
- Route-level code splitting, lazy-loaded images, reduced-motion support,
  keyboard-visible focus states, semantic HTML and ARIA labels
