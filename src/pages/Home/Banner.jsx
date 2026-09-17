import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import MovieCard from "../../components/MovieCard";

const HeroBanner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await fetch("https://api.tvmaze.com/shows");
      const result = await res.json();
      setMovies(result.slice(0, 15));
    };
    loadMovies();
  }, []);

  return (
    <div>
      <div className="relative flex items-center justify-center overflow-hidden bg-gray-900 mx-10 my-5 px-10 py-20 rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./bg.jpg)",
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/95"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 border-2 border-dashed border-gray-500 rounded-lg">
          {/* Main Content */}
          <div className="text-center space-y-8">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider uppercase">
              Discover Movies
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
              Explore and discover your favorite movies from around the world.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/allMovies"
                className="inline-block px-8 py-3 text-white font-semibold border-2 border-gray-500 rounded"
              >
                [ Explore Now ]
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-5">
        {/* First 16 Movies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center py-15">
        <Link
          to="/allMovies"
          className=" px-8 py-3 font-semibold btn btn-neutral rounded"
        >
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
