# Shibin Venugopalan — Portfolio

A personal portfolio website built with React + Vite + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy that folder to Vercel, Netlify, or any static host.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo on vercel.com
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variable: `VITE_FORMSPREE_URL = https://formspree.io/f/xykqwvzz`

## Deploy to Netlify

1. Push to GitHub, or drag-and-drop the `dist/` folder onto netlify.com
2. If using GitHub: Build command `npm run build`, Publish directory `dist`
3. Add environment variable: `VITE_FORMSPREE_URL = https://formspree.io/f/xykqwvzz`

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_URL` | Formspree endpoint for the contact form |
