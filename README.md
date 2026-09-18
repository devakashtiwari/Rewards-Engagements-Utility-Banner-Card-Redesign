# VELOOP Rewards — Rewards, Engagements & Utility Banners

**Task 0G** — Frontend Development Task Assignment

## Project Overview

This project delivers five premium, fintech-inspired banner/card components for the
VELOOP Rewards platform:

1. **Leaderboard Banner** — competitive ranking & podium visualization
2. **Watch Ad & Earn Banner** — on-demand ad-watching reward flow
3. **Contact Us Banner** — support access and trust-building
4. **Follow & Earn Banner** — social channel growth & campaign rewards
5. **Daily Bonus Banner** — recurring check-in / streak reward

Each banner is built as a self-contained, reusable React component sharing one
consistent design system (color tokens, typography, spacing, CTA styling) while
keeping a distinct visual identity, per the approved design reference.

All banner copy is rendered as real, selectable HTML text (not baked into the
images) — the supplied illustration assets (`B1`–`B5`) are used purely as the
background/illustration layer for each card.

> **Note:** Ranking, reward, campaign and streak values shown across the banners
> are development placeholders for presentation purposes only, and are not to be
> treated as live/official reward figures.

## Banner List

| # | Component | File |
|---|-----------|------|
| 1 | Leaderboard Banner | `src/components/LeaderboardBanner/` |
| 2 | Watch Ad & Earn Banner | `src/components/WatchAdBanner/` |
| 3 | Contact Us Banner | `src/components/ContactBanner/` |
| 4 | Follow & Earn Banner | `src/components/FollowEarnBanner/` |
| 5 | Daily Bonus Banner | `src/components/DailyBonusBanner/` |

## Features

- 100% width, fully responsive banners for mobile, tablet, and desktop
- Height ranges follow the approved spec (see Responsive Breakpoints below)
- Real, mouse-selectable text throughout — no text baked into images
- Shared CTA / badge / pill / info-row components for visual consistency
- Lightweight, purposeful motion (floating rank cards, coin bob, gift pulse,
  live-status blink, sparkle) — all respect `prefers-reduced-motion`
- Keyboard-accessible buttons with visible focus states
- Copy-to-clipboard on the Contact Us banner's "Copy Email" action
- Clean, modular component architecture using CSS Modules (no style bleed)

## Technology Stack

- React 18
- Vite 5
- CSS Modules
- Bootstrap (reboot/reset only)
- lucide-react (icons)
- React Hooks

## Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd veloop-rewards-banners

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
```

The app runs by default at `http://localhost:5173`.

## Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint against the `src` folder |

## Folder Structure

```
src/
├── assets/                     # Provided banner illustration PNGs (B1–B5)
├── components/
│   ├── common/                 # Shared CTA button, pills, badges, info rows
│   ├── LeaderboardBanner/
│   ├── WatchAdBanner/
│   ├── ContactBanner/
│   ├── FollowEarnBanner/
│   └── DailyBonusBanner/
├── styles/
│   └── index.css                # Global tokens, resets, body background
├── App.jsx                      # Assembles all five banners
└── main.jsx                     # React entry point
```

Each component folder contains a `.jsx` file and a matching `.module.css`
file, keeping markup and styling co-located and scoped.

## 5. Height Requirements

| Device | Minimum height | Maximum height | Layout |
|---|---:|---:|---|
| Laptop / Desktop | 410px | 450px | Multi-column (text + illustration [+ info panel]) |
| Tablet | 380px | 540px | Adjusted column split, panel reflows below |
| Mobile | 330px | 520px | Vertical stack: illustration → heading → description → reward info → CTA |

Breakpoints are implemented with height-based CSS media queries per component using the ranges above.

## Animation Details

| Banner | Interaction / Motion |
|---|---|
| Leaderboard | Rank cards gently float (staggered), CTA hover-lift, arrow slide on hover |
| Watch Ad & Earn | Floating VE coin labels bob independently, CTA hover-lift |
| Contact Us | Copy Email button micro-interaction (label swaps to "Copied!"), row hover states |
| Follow & Earn | Sparkle twinkle on the gift icon, CTA hover-lift |
| Daily Bonus | Gift illustration soft pulse, "Available Now" status dot blink, CTA hover-lift |

All CTA buttons additionally include hover, active, and keyboard focus-visible
states. Motion is disabled automatically for users with
`prefers-reduced-motion: reduce` set at the OS level.

## Screenshots

_Add local screenshots of each banner (desktop / tablet / mobile) here before
final submission, e.g.:_

```
docs/screenshots/leaderboard-desktop.png
docs/screenshots/watch-ad-mobile.png
...
```

## Live Demo

`<add your Vercel/Netlify deployment link here>`

## GitHub Repository

`<add your GitHub repository link here>`

## Author

`<your name>`
