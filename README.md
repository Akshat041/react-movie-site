# react-movie-site

A small React + Vite movie browsing app. This repository contains a `frontend` Vite React application that lists popular movies and provides simple search and favorites features.

## Frontend (Vite + React)

- Location: `frontend`
- Framework: React (v19)
- Bundler: Vite

### Features

- Browse popular movies (uses The Movie Database API).
- Search for movies by keywords.
- Save favorites in local app state/context.

### Quick Start (Windows)

1. Open a terminal in the `frontend` folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

The dev server runs on Vite (default: http://localhost:5173).

### Build & Preview

```
npm run build
npm run preview
```

### Lint

```
npm run lint
```

### Project Structure (important files)

- `frontend/src/App.jsx` — app root and routes
- `frontend/src/main.jsx` — React entry
- `frontend/src/components` — UI components (e.g., movie_card.jsx, Navbar.jsx)
- `frontend/src/pages` — page views (Home, Favorites)
- `frontend/src/contexts/MovieContext.jsx` — favorites & app state
- `frontend/src/services/api.js` — TMDB API helpers (contains API key)
- `frontend/src/css` — styles
