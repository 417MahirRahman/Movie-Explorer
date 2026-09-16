import React from "react";

const Modal = ({ movie }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`${movie.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4">
            <img
              className="w-full md:w-1/3 h-auto rounded-lg"
              src={movie.image?.medium}
              alt={movie.name}
            />
            <div>
              <h3 className="font-bold text-2xl">{movie.name}</h3>
              <p className="py-1">Language: {movie.language}</p>
              <p className="py-1">Genres: {movie.genres?.join(", ")}</p>
              <p className="py-1">Rating: {movie.rating?.average ?? "N/A"}</p>
              <p className="py-1">Released Date: {movie.premiered}</p>
              <div
                className="py-2"
                dangerouslySetInnerHTML={{ __html: movie.summary }}
              />
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
