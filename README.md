# VELOOP Rewards — Rewards, Engagements & Utility Banners

> **Task 0G — Frontend Development Task Assignment**  
> Complete redesign and redevelopment of 5 high-converting, interactive utility banners for the VELOOP Rewards platform, built strictly in accordance with the Task Assignment Specification and the **Page 25 Reference Design**.

---

## 1. Project Overview

The objective of this project is to create **premium, modern, interactive, trustworthy, and highly engaging** promotional and utility banners for the **VELOP Rewards** platform. Each banner is treated as a **mini product experience** that immediately communicates:
1. **What the feature is**
2. **What benefit it provides**
3. **What the user can do**
4. **Why the user should interact with it**

The visual language combines:
$$\text{Modern Fintech} + \text{Rewards Platform} + \text{Gamification} + \text{Premium SaaS}$$

All five banners strictly complement the application body background (`#161827`) while maintaining an individual visual identity, fluid $100\%$ container width, and precise responsive height compliance across desktop, tablet, and mobile devices.

---

## 2. Banner List

| # | Banner Component | Primary Theme | Purpose & Visual Direction | Key UI Elements |
|---|---|---|---|---|
| **01** | **Leaderboard Banner** | Gold / Amber (`#f5b93e`) | Introduces the competitive ranking experience; motivates users to climb the ranks. | `01` Tag, `COMPETITION STAGE ACTIVE`, 3D Podium with Trophy & Upward Chart, Ranked user cards (User A, B, C with point counts), Prize pool pill (`50,000 VEs`), `Check Rankings →` CTA. |
| **02** | **Watch Ads & Earn Banner** | Electric Blue (`#3f8bff`) | Promotes on-demand ad viewing rewards with instant wallet crediting and no caps. | `02` Tag, `ON-DEMAND REWARDS`, TV/Video artwork, Floating `VE` coins, 3D engraved `VE` vault, `No Daily Cap`, `Instant Credits`, `Watch & Earn →` CTA. |
| **03** | **Contact Us Banner** | Deep Navy / Slate (`#5b8def`) | Builds customer trust by demonstrating accessible support and fast contact channels. | `3` Tag, `CONTACT US`, 3D Customer Support Specialist, Help action panel (`We're here to help`, `Email Us` with 1-click clipboard copy, `Help Center`, `Submit a Ticket`), `Contact Support` CTA. |
| **04** | **Follow & Earn Banner** | Muted Purple (`#a879ff`) | Encourages community growth and eligible social campaign rewards across official channels. | `4` Tag, `FOLLOW & EARN`, Smartphone mockup with VELOOP Rewards profile (`128 Posts`, `24.5K Followers`, `8 Following`), Floating social badges, Campaign reward card (`+500 SVEs`, `Demo Campaign`), `Explore Our Channels →` CTA. |
| **05** | **Daily Bonus Banner** | Warm Bronze / Gold (`#f2a93b`) | Drives daily user retention through recurring bonus opportunities and streak tracking. | `5` Tag, `DAILY BONUS`, Open golden gift box with bursting VE coins, `TODAY'S BONUS +25 GEMS Available Now •` card, `7-DAY STREAK` tracker (Days 1–6 checked, Day 7 locked), Interactive `Claim Bonus` CTA. |

---

## 3. Features & Highlights

- **Strict Adherence to Reference Design (Page 25)**: Typography, badges, color palettes, podium alignments, and right-hand action cards match the approved reference.
- **Fluid 100% Width Layout**: Each banner expands to fill its parent container width seamlessly without horizontal scrollbars.
- **Responsive Height Clamps**: Enforces the exact height boundaries mandated in the specification:
  - **Laptop / Desktop**: `410px – 450px`
  - **Tablet**: `380px – 540px`
  - **Mobile**: `330px – 520px`
- **Real Selectable HTML Content**: All headlines, descriptions, metrics, badges, and buttons are real, accessible DOM elements (not flat image text).
- **Interactive State Demonstrations**:
  - **Contact Us**: Functional 1-click clipboard copy for `velooprewardsofficial@gmail.com` with tactile `Copied!` confirmation.
  - **Daily Bonus**: Interactive claim action updating bonus status, celebration feedback, and streak completion.
  - **Floating Notification Toast System**: Displays feedback when CTAs (`Check Rankings`, `Watch & Earn`, `Explore Channels`) are activated.
  - **Animated Counter Hook**: Smooth count-up effect on prize pool (`50,000 VEs`) and follower statistics (`24.5K`).
- **Page 25 Footer & Disclaimer**: Includes the mandatory notice banner (`Demo / Placeholder Notice`) and modern `VELOP REWARDS` logomark.
- **Accessibility & Contrast**: Visible focus states (`:focus-visible`), touch-friendly targets ($\ge 44\text{px}$), ARIA attributes, and semantic HTML5 tags throughout.

---

## 4. Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling Architecture**: Pure **CSS Modules** (`.module.css`) + Global CSS Design System (`index.css`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) — *Poppins* (headings & display metrics) + *Inter* (body text)
- **Linting**: ESLint with React & React Hooks rules

---

## 5. Installation & Setup

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/veloop-rewards-banners.git

# 2. Navigate to the project directory
cd veloop-rewards-banners

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The application will be running locally at:
```
http://localhost:5173/
```

---

## 6. Development Commands

| Command | Action |
|---|---|
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the production-ready `dist/` directory. |
| `npm run preview` | Locally serves the production bundle from `dist/` to verify production behavior. |
| `npm run lint` | Runs ESLint to validate JavaScript and React syntax and hook dependencies. |

---

## 7. Folder Structure

```
c:/Users/Akash/Desktop/Cards/
├── dist/                               # Production build output
├── node_modules/                       # Project dependencies
├── public/                             # Public static assets
├── src/
│   ├── assets/                         # High-res banner illustrations (B1–B5)
│   │   ├── B1_Leaderboard_Banner  .png
│   │   ├── B1_Leaderboard_Banner-Mobile.png
│   │   ├── B2_Watch_Ad_s_Earn_Banner.avif
│   │   ├── 3.Contact Us Banner-Cs2c-h28.jpg
│   │   ├── 4.Follow s Earn Banner--Toly6Q3.jpg
│   │   └── 5.Daily Bonus Banner-IP4_pqcH.jpg
│   ├── components/
│   │   ├── common/                     # Reusable design system primitives
│   │   │   ├── BannerUI.jsx            # SectionTag, EyebrowPill, CtaButton, FeatureChip, InfoRow
│   │   │   └── BannerUI.module.css
│   │   ├── LeaderboardBanner/          # Banner 01
│   │   │   ├── LeaderboardBanner.jsx
│   │   │   └── LeaderboardBanner.module.css
│   │   ├── WatchAdBanner/              # Banner 02
│   │   │   ├── WatchAdBanner.jsx
│   │   │   └── WatchAdBanner.module.css
│   │   ├── ContactBanner/              # Banner 03
│   │   │   ├── ContactBanner.jsx
│   │   │   └── ContactBanner.module.css
│   │   ├── FollowEarnBanner/           # Banner 04
│   │   │   ├── FollowEarnBanner.jsx
│   │   │   └── FollowEarnBanner.module.css
│   │   └── DailyBonusBanner/           # Banner 05
│   │       ├── DailyBonusBanner.jsx
│   │       └── DailyBonusBanner.module.css
│   ├── hooks/
│   │   └── useCountUp.js               # Smooth metric counter animation hook
│   ├── styles/
│   │   └── index.css                   # Global tokens, resets, footer & layout rules
│   ├── App.jsx                         # Main container assembling all 5 banners & toast system
│   └── main.jsx                        # React root entry point
├── .eslintrc.cjs                       # ESLint configuration
├── .gitignore                          # Git ignore rules
├── index.html                          # HTML5 template with Google Fonts
├── package.json                        # Dependencies and npm scripts
├── vite.config.js                      # Vite bundler configuration
└── README.md                           # Project documentation
```

---

## 8. Responsive Breakpoints

| Viewport Category | Screen Width Range | Specified Banner Height | Layout Strategy |
|---|---|---|---|
| **Laptop / Desktop** | $\ge 1025\text{px}$ | `410px – 450px` | Horizontal multi-column layout with illustration and right-side interactive cards side-by-side. |
| **Tablet** | $768\text{px} - 1024\text{px}$ | `380px – 540px` | Balanced proportional 2-column or 3-column reflow preventing empty spaces. |
| **Mobile** | $\le 767\text{px}$ | `330px – 520px` | Vertical hierarchy: Artwork at top, bold feature heading, concise body, and full-width touch-friendly CTA. |

---

## 9. Animation & Micro-interaction Details

| Banner | Micro-interaction / Animation |
|---|---|
| **Leaderboard (01)** | Smooth floating rank podium badges (`User A`, `User B`, `User C`), glowing prize pool counter, hover lift and arrow transition on CTA button. |
| **Watch Ads (02)** | Staggered floating `VE` coins with pulsing soft glow, illuminated `VE` vault engraving with breathing glow cycle, pulse effect on video play icon. |
| **Contact Us (03)** | 3D specialist illustration floating drift, interactive email copy button with animated icon swap to checkmark and `Copied!` tooltip, chevron slide on link hover. |
| **Follow & Earn (04)** | Smartphone subtle float, follower count-up animation, interactive hover on campaign card. |
| **Daily Bonus (05)** | Bursting gold coins, pulsating green `Available Now •` status light, streak checkmark celebration indicators, interactive claim state. |

*All keyframe animations are lightweight, GPU-accelerated (using `transform` and `opacity`), and automatically respect user OS preferences via `@media (prefers-reduced-motion: reduce)`.*

---

## 10. Deployment

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework preset will automatically be detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com/) and select **Import from Git**.
2. Connect your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 11. Live Demo & Repository Links

- **Live Deployment Link**: `https://veloop-rewards-banners.vercel.app` *(or custom Vercel URL)*
- **GitHub Repository**: `https://github.com/<your-username>/veloop-rewards-banners`

---

## 12. Author

- **Developer**: Akash / VELOOP Rewards Frontend Team
- **Assignment**: Task 0G — Rewards, Engagements Utility Banner/Card Redesign
- **Date**: September 2026
