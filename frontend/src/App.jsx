import "./App.css";
import MovieCard from "./components/movie_card";

function App() {
  return (
    <MovieCard
      movie={{
        title: "F1 - The Movie",
        url:
          "https://play-lh.googleusercontent.com/GAPgLw1XBPUkygT9c7JOIvYB3K9A6z-Pde-Tt12CxXUQ42WaWExG7ZtCSdGgK12Y02u6Qq5Bb0d6FCDqhIQ",
        releaseDate: "27 June, 2025",
      }}
    ></MovieCard>
  );
}

export default App;
