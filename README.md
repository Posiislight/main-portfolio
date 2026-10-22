# Dev Portfolio Website

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/posiislights-projects/v0-dev-portfolio-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/bIl63PDoKl6)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/posiislights-projects/v0-dev-portfolio-website](https://vercel.com/posiislights-projects/v0-dev-portfolio-website)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/bIl63PDoKl6](https://v0.dev/chat/projects/bIl63PDoKl6)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Design system

Warm editorial look with a dark and a light theme. Switch with the sun/moon button in the header; the first visit follows the OS setting and the choice is remembered.

- **Fonts:** Instrument Serif for headings (one italic accent word per major heading), Geist for body text. Loaded with `next/font`.
- **Tokens:** CSS variables in `app/globals.css` (`:root` is light, `.dark` is dark), mapped to Tailwind as `canvas`, `surface`, `showcase`, `fg`, `fg-muted`, `line`, `stroke`, `brand`, `brand-hover`, `brand-soft`, `logo`, `ok`, plus `shadow-soft` and `shadow-lift`.
- **Texture:** a film-grain overlay (`body::before`) with theme-specific opacity and blend.
- **Motion:** 0.3s scroll reveal (`components/reveal.tsx`), hidden only when JavaScript has run, and off under `prefers-reduced-motion`.
- **Contrast:** `npm run test:contrast` checks the token pairs against WCAG AA in both themes.
