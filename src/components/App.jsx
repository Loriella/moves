import React from 'react';
// import {moviesData} from '../moviesData';
import LoginForm from './LoginForm';
import MoviesPage from './MoviesPage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuth: false
    }
  }

  render() {
    return (
      this.state.isAuth ? <MoviesPage/> : <LoginForm/>
    );
  }
}

export default App;
