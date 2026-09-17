import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";

const All_Movies = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const endpoint = searchValue.trim()
        ? `https://api.tvmaze.com/search/shows?q=${searchValue}`
        : `https://api.tvmaze.com/shows`;

      const res = await fetch(endpoint);
      const result = await res.json();
      const movies = searchValue.trim()
        ? result.map((item) => item.show)
        : result;

      setData(movies);
    };
    loadData();
  }, [searchValue]);

  //Search Function
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="px-10 space-y-10 py-20">
      <div className="flex flex-row md:flex-col items-center gap-5">
        <h1 className="font-bold text-xl lg:text-3xl xl:text-4xl text-red-500">
          Find Old, New & Popular Movies Here
        </h1>
        <SearchBar onChange={handleSearch} value={searchValue}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default All_Movies;
