import React from 'react';

const MovieItem = props => {
  const {movie, removeMovie, addMovieWillWatch} = props;
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || 
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              onClick={addMovieWillWatch.bind(null, movie)}
              className="btn btn-secondary"
            >
              Will watch
            </button>
            <button
              type="button"
              onClick={removeMovie.bind(null, movie)}
              className="btn btn-secondary"
            >
              Delete movie
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MovieItem;
