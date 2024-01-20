import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryMovies } from "../api";
import { MovieCard } from "../components/MovieCard";

const SearchPage = () => {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    queryMovies(keyword).then((results) => {
      setMovies(results);
      setLoading(false);
    });
  });

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <section className="px-4 md:px-14 md:py-20 py-32 min-h-screen bg-slate-900">
        <h2 className="text-[1.2rem] text-white font-semibold mb-4">
          Search for {keyword}
        </h2>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4`}>
          {movies.length > 0 ? (
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })
          ) : (
            <p className="text-white text-md">Film Not Found</p>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
