import React from "react";
// import {moviesData} from '../moviesData';
import {API_URL, API_KEY_3} from '../utils/api';
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
          this.setState({
            movies: data.results
      })
    });
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    })
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  };

  addMovieWillWatch = movie => {
    const updateMovies = [...this.state.moviesWillWatch];
    updateMovies.push(movie);
    this.setState({
      moviesWillWatch: updateMovies
    })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieWillWatch={this.addMovieWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
