import MovieCard from "../components/movie_card";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";
import { useState, useEffect } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load Movies....");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

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
