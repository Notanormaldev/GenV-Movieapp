<div align="center">

# 🎬 GenV — Movie App

**A production-grade movie discovery platform built with cutting-edge React 19 architecture.**  
Infinite scroll, real-time search, embedded trailers, global state management — all wired together seamlessly.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-genv--movie.netlify.app-00C7B7?style=for-the-badge)](https://genv-movie.netlify.app/)
[![GitHub](https://img.shields.io/badge/📁_Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Notanormaldev/GenV-Movieapp)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://genv-movie.netlify.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📸 Screenshots

| Home | Trending |
|------|----------|
| ![Home](/screenshots/home.png) | ![Trending](/screenshots/Trending.png) |

| Search | Movie Details |
|--------|---------------|
| ![Search](/screenshots/search.png) | ![Details](/screenshots/details.png) |

---

## ✨ Core Features

- 🏠 **Dynamic Home Feed** — Curated movie sections powered by live TMDB API data
- 🔥 **Trending Page** — Real-time trending movies fetched and rendered with infinite scroll
- 🔍 **Live Search** — Debounced search with instant results from the TMDB Search API
- 🎞️ **Movie Details Page** — Deep-dive view with synopsis, ratings, genres, and cast
- ▶️ **Embedded Trailer Playback** — Watch official trailers in-app via `react-player`
- ♾️ **Infinite Scrolling** — Seamless pagination that auto-loads more content as you scroll — no "Load More" buttons
- 🗄️ **Global State Management** — Centralized Redux store for consistent app-wide data flow
- 📱 **Fully Responsive** — Tailwind CSS utility classes ensure pixel-perfect layout on all screen sizes

---

## 🛠️ Tech Stack & Architecture

### ⚛️ Frontend Core

| Package | Version | Purpose |
|--------|---------|---------|
| `react` | ^19.1.1 | Latest React with concurrent rendering & improved Suspense |
| `react-dom` | ^19.1.1 | DOM bindings for React 19 |
| `react-router-dom` | ^7.7.1 | Client-side routing with nested layouts & dynamic params |

### 🗄️ State Management

| Package | Version | Purpose |
|--------|---------|---------|
| `@reduxjs/toolkit` | ^2.8.2 | Simplified Redux with `createSlice`, `createAsyncThunk` & RTK Query-ready setup |
| `react-redux` | ^9.2.0 | Binds Redux store to React component tree via `useSelector` & `useDispatch` |

> The entire app state — active movie, search results, trending data — flows through a single Redux store, making data predictable and debuggable at every level.

### 🌐 API & Networking

| Package | Version | Purpose |
|--------|---------|---------|
| `axios` | ^1.11.0 | Promise-based HTTP client for all TMDB API calls with interceptor support |

> All API communication is abstracted into Axios instances with base URLs and API key headers pre-configured — no repeated boilerplate across components.

### ♾️ Infinite Scroll

| Package | Version | Purpose |
|--------|---------|---------|
| `react-infinite-scroll-component` | ^6.1.0 | Performant scroll detection with built-in loader & end-of-list states |

> Implemented across Trending and Search pages — as the user scrolls down, the next page of results is automatically fetched and appended to the list without any re-render of existing items.

### ▶️ Media Playback

| Package | Version | Purpose |
|--------|---------|---------|
| `react-player` | ^2.12.0 | Embedded YouTube/Vimeo player for movie trailers inside the Details page |

### 🎨 UI & Styling

| Package | Version | Purpose |
|--------|---------|---------|
| `tailwindcss` | ^4.1.11 | Utility-first CSS framework — v4's new engine with faster builds & CSS variables |
| `@tailwindcss/vite` | ^4.1.11 | Native Vite plugin for Tailwind v4 — zero PostCSS config needed |
| `remixicon` | ^4.6.0 | 2800+ open-source icons used throughout the UI |

### ⚡ Build Tooling & DX

| Package | Version | Purpose |
|--------|---------|---------|
| `vite` | ^7.1.0 | Next-gen frontend build tool — sub-second HMR, ESM-native dev server |
| `@vitejs/plugin-react` | ^4.7.0 | Babel-based Fast Refresh for instant React component updates |
| `eslint` | ^9.32.0 | Static analysis with React Hooks & React Refresh lint rules |

---

## 🏗️ Project Structure

```
GenV-Movieapp/
├── public/
│   ├── favicon.ico
│   └── imgs & videos (static assets)
├── src/
│   ├── components/        # Reusable UI components (cards, navbar, loader...)
│   ├── pages/             # Route-level page components (Home, Trending, Search, Details)
│   ├── store/             # Redux slices & store configuration
│   ├── hooks/             # Custom React hooks (infinite scroll logic, API calls)
│   ├── utils/             # Axios instance, API constants, helpers
│   └── main.jsx           # App entry point — Redux Provider + Router
├── .env                   # Environment variables (TMDB API Key)
├── index.html
├── vite.config.js         # Vite + Tailwind v4 plugin config
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+` or **yarn**
- A free [TMDB API Key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Notanormaldev/GenV-Movieapp.git
cd GenV-Movieapp

# 2. Install all dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Then edit .env and add your TMDB API key
```

### Environment Variables

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

> ⚠️ All env vars must be prefixed with `VITE_` to be exposed inside the Vite + React app.

### Run Locally

```bash
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build       # Outputs to /dist
npm run preview     # Preview the production build locally
```

---

## 🔌 API Integration

This app is powered by the **[TMDB (The Movie Database) API](https://developer.themoviedb.org/docs)**.

| Endpoint Used | Purpose |
|--------------|---------|
| `/trending/movie/week` | Weekly trending movies |
| `/movie/popular` | Popular movies for home feed |
| `/search/movie` | Real-time search results |
| `/movie/{id}` | Full movie details |
| `/movie/{id}/videos` | Trailer keys for React Player |

---

## ☁️ Deployment

Deployed on **Netlify** with automatic CI/CD from the `main` branch.

```
Build command:   npm run build
Publish dir:     dist
```

Live at 👉 **[https://genv-movie.netlify.app/](https://genv-movieapp.netlify.app/)**

---

## 🙌 Author

Built by [@Notanormaldev](https://github.com/Notanormaldev)

If this project helped you or you found it interesting, drop a ⭐ — it means a lot!

---

<div align="center">
  <sub>Made with React 19 · Redux Toolkit · Tailwind CSS v4 · Vite 7 · Infinite Scroll · TMDB API</sub>
</div>