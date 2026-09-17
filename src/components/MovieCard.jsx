import React from "react";
import Modal from "./Modal";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="card bg-base-100 w-full h-full overflow-hidden shadow-2xl">
        <figure>
          <img
            className="w-full h-auto"
            src={movie.image?.medium}
            alt={movie.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.name}</h2>
          <div>
            <p className="py-1">
              <span className="font-bold flex items-center">
                Rating:
                <img
                  src="/star-solid-full.svg"
                  alt="star"
                  className="w-6 h-6"
                />
                <span className="font-normal">{movie.rating?.average}</span>
              </span>
            </p>
            <p className="py-1">
              <span className="font-bold">Released Date: </span>
              {movie.premiered}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-neutral"
              onClick={() => document.getElementById(`${movie.id}`).showModal()}
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      <Modal movie={movie} />
    </div>
  );
};

export default MovieCard;
