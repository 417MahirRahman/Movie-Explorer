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
            <p>Rating: {movie.rating?.average ?? "N/A"}</p>
            <p>Released Date: {movie.premiered}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => document.getElementById(`${movie.id}`).showModal()}
            >
              More Details
            </button>
          </div>
        </div>
      </div>

      <Modal movie={movie} />
    </div>
  );
};

export default MovieCard;
