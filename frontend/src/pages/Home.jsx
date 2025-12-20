import MovieCard from "../components/movie_card";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "F1 - The Movie",
      releaseDate: "2025",
    },
    {
      id: 2,
      title: "The Matrix",
      releaseDate: "1999",
    },
    {
      id: 3,
      title: "Interstellar",
      releaseDate: "2014",
    },
    {
      id: 4,
      title: "Tenet",
      releaseDate: "2020",
    },
  ];

  const handleSeach = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="home">
      <form onSubmit={handleSeach} className="search-form">
        <input
          type="text"
          placeholder="Search Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
