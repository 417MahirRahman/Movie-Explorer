import React from "react";

const Modal = ({ movie }) => {
  return (
    <div>
      <dialog id={`${movie.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4">
            <img
              className="w-full h-auto rounded-lg"
              src={movie.image?.medium}
              alt={movie.name}
            />
            <div>
              <h3 className="font-bold text-2xl">{movie.name}</h3>
              <p className="py-1">
                <span className="font-bold">Language: </span> {movie.language}
              </p>
              <p className="py-1">
                <span className="font-bold">Genres: </span>
                {movie.genres?.join(", ")}
              </p>
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
              <p className="py-1">
                <span className="font-bold">Summary: </span>
                {movie.summary?.replace(/<[^>]+>/g, "") ??
                  "No summary available."}
              </p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
