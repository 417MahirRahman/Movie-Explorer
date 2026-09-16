import React from 'react';
import { useEffect, useState } from "react";
import MovieCard from '../../components/MovieCard';

const All_Movies = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      const loadData = async () => {
        const res = await fetch(
          `https://api.tvmaze.com/shows?search=${searchValue}`,
        );
        const data = await res.json();
        setData(data);
      };
      loadData();
    }, [searchValue]);

    return (
      <div className='px-4 py-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
};

export default All_Movies;