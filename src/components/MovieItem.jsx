import React from 'react';

const MovieItem = props => {
  return (
    <div>
      <p>{props.movie.title}</p>
      <button onClick={props.removeMovie.bind(null, props.movie)}>
        Delete movie
      </button>
    </div>
  )
};

export default MovieItem;
