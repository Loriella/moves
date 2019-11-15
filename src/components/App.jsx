import React from 'react';
// import {moviesData} from '../moviesData';
import LoginForm from './LoginForm';
import MoviesPage from './MoviesPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuth: true
    }
  }

  updateIsAuth = value => {
    this.setState({
      isAuth: value
    });
  };

  render() {
    return (
      this.state.isAuth
        ?
          <MoviesPage/>
        : <LoginForm
          updateIsAuth={this.updateIsAuth}
          />
    );
  }
}

export default App;
