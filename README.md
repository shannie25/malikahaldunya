# Malika Haldunya Insulation Works LLC

Client website for Malika Haldunya Insulation Works LLC, built as a separate Vite React project.

## Tech Stack

- React
- Vite
- Plain CSS
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Vercel

This project includes `vercel.json` so Vercel uses the Vite output folder:

- Build command: `npm run build`
- Output directory: `dist`

## Project Structure

```text
src/
  components/
    Button.jsx
    ContactForm.jsx
    Footer.jsx
    Navbar.jsx
    ProjectCard.jsx
    ServiceCard.jsx
    index.js
  sections/
    About.jsx
    Contact.jsx
    Hero.jsx
    Projects.jsx
    Services.jsx
    WhyChooseUs.jsx
    index.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Main Edits

- Contact details: `src/sections/Contact.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`
- Services: `src/sections/Services.jsx`
- Projects: `src/sections/Projects.jsx`
- Global styling: `src/index.css`

## Client Information

- Company: Malika Haldunya Insulation Works LLC
- Location: Abu Dhabi, UAE
- Email: `info@malikahaldunya.ae`
- Domain: `https://malikahaldunya.ae`
