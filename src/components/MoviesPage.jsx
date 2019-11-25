import React from 'react';
import {API_KEY_3, callApi} from '../utils/api';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
import Pagination from './Pagination';

class MoviesPage extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'revenue.desc',
      page: 1,
      total_pages: 1
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by!== this.state.sort_by || prevState.page !== this.state.page) {
      this.getMovies()
    }
  }

  getMovies = () => {
    callApi(`discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
    .then((data) => {
      this.setState({
        movies: data.results,
        total_pages: data.total_pages
      })
    });
  };

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

  updateSortBy = value => {
    this.setState({
      sort_by: value,
      page: 1
    })
  };

  updatePage = pageNumber => {
    this.setState({
      page: pageNumber
    })
  };

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row mb-4">
                <div className="col-12">
                  <MovieTabs
                    sort_by={this.state.sort_by}
                    updateSortBy={this.updateSortBy}
                  />
                </div>
              </div>
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
              <div className="row mb-4 justify-content-center">
                <Pagination
                  currentPage={this.state.page}
                  totalPages={this.state.total_pages}
                  updatePage={this.updatePage}
                />
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

export default MoviesPage;
