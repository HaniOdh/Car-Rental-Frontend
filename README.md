# AutoRent - Car Rental Website Frontend

A car rental website frontend built as a personal project to practice and improve frontend development skills with React, Vite, and Tailwind CSS.

Note: This project is frontend-only. There is no backend, and the login/register/search forms and buttons are UI-only (they do not submit or persist data).

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4
- React Router v7
- lucide-react
- ScrollReveal
- ESLint

## Features

- Home page with hero section, booking search bar, and trust stats
- Featured cars grid with ratings, specs, and daily pricing
- Video section with a YouTube lightbox modal
- "Why Choose AutoRent" benefits section
- Responsive navbar with mobile hamburger menu
- Scroll-reveal animations
- Login and Sign-up pages (UI only)

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/HaniOdh/Car-Rental-Frontend.git
cd car-rental-website
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Project Structure

```text
src/
|-- assets/       Local images (car photos, video poster)
|-- components/   Hero, FeaturedCars, VideoSection, Features, Nav, Footer, Layout
|-- pages/        Login, Register
|-- App.jsx       Router setup (/, /login, /register)
|-- main.jsx      Entry point
```

## Routes

- `/` - Home page (Hero, Featured Cars, Video, Features sections)
- `/login` - Login page (UI only)
- `/register` - Register page (UI only)

The Cars, About, and Contact links in the navbar and footer are placeholders for now.

## Roadmap

- Add car listing and detail pages, a booking flow, and real form validation
- Connect a backend/API for authentication and car inventory
- Replace placeholder text and links

## License

Personal learning project - free to use, fork, and experiment with.
