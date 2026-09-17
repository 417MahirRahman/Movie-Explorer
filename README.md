# Movie Explorer App

A React application for discovering and searching TV shows/movies, built on top of the [TVmaze API](https://www.tvmaze.com/api). Users can browse a curated selection of shows on the home page, search the full catalog, and view detailed information about each show in a modal.

🔗 **Live Demo:** [movie-explorar.vercel.app](https://movie-explorar.vercel.app/)

## Features

- **Hero Banner** — landing section that showcases the first 16 shows from the TVmaze catalog.
- **Search** — live search across all TVmaze shows via the `/search/shows` endpoint.
- **Show Details Modal** — click "More Details" on any show card to view its image, genres, language, rating, release date, and summary.
- **Responsive Grid** — show cards are laid out in a responsive grid (2 columns on mobile, up to 5 on large screens).

## Tech Stack

- **React** — component-based UI
- **React Router** — client-side routing (e.g. `/allMovies`)
- **Tailwind CSS + daisyUI** — styling and pre-built UI components (`card`, `modal`, `input`, `btn`)
- **TVmaze API** — public API providing show data (no API key required)

## Project Structure

```
src/
├── components/
│   ├── HeroBanner.jsx    # Landing hero section with first 16 shows + CTA
│   ├── MovieCard.jsx      # Individual show card (poster, title, rating, modal trigger)
│   ├── Modal.jsx          # Show details modal (genres, language, summary, etc.)
│   └── SearchBar.jsx      # Controlled search input
├── pages/
│   └── All_Movies.jsx     # Full show listing page with search
```

## Getting Started

### Installation

```bash
git clone https://github.com/417MahirRahman/Movie-Explorer.git
cd Movie-Explorer
npm install
```

### Running the app

```bash
npm run dev
```