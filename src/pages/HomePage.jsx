import React, { useEffect, useState } from "react";
import { getPopularMovies, getNewMovies } from "../api";
import { MovieCard } from "../components/MovieCard";
import { Hero } from "../components/Hero";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((results) => {
      setPopularMovies(results);
    });
    getNewMovies().then((results) => {
      setNewMovies(results);
    });
  }, []);

  return (
    <>
      <header>
        <Hero />
      </header>
      <section id="popular" className="px-4 md:px-14 py-8 bg-slate-900">
        <h2 className="text-[1.5rem] text-white font-semibold mb-2">Popular</h2>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4`}>
          {popularMovies.map((movie, i) => {
            if (i <= 9) {
              return <MovieCard movie={movie} key={movie.id} />;
            }
          })}
        </div>
      </section>
      <section id="new-movie" className="px-5 md:px-16 py-8 bg-slate-900">
        <h2 className="text-[1.5rem] text-white font-semibold mb-2">
          New Movie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {newMovies.map((movie) => {
            if (movie.poster_path !== null) {
              return <MovieCard movie={movie} key={movie.id} />;
            }
          })}
        </div>
      </section>
      <footer className="w-full py-4 bg-slate-950 text-center">
        <p className="text-[1.2rem] font-bold text-white">MovieStar</p>
      </footer>
    </>
  );
};

export default HomePage;
