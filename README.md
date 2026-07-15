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

