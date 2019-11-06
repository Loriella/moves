import React from 'react';
// import {moviesData} from "../moviesData";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    }
  }

  render() {
    const {
      movie,
      removeMovie,
      addMovieWillWatch,
      removeMovieFromWillWatch
    } = this.props;

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
              {this.state.willWatch
                ? <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      this.setState({
                        willWatch: false
                      });
                      removeMovieFromWillWatch(movie);
                    }}
                  >
                    Remove will watch
                  </button>
                : <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        willWatch: true
                      });
                      addMovieWillWatch(movie);
                    }}
                    className="btn btn-secondary"
                  >
                    Add will watch
                  </button>
              }
            </div>
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
    )
  }
}

export default MovieItem;
