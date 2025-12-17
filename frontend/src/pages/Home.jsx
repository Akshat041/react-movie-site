import MovieCard from "../components/movie_card";

function Home() {
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

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
