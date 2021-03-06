import React from 'react';
import {API_URL, API_KEY_3} from '../utils/api';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.inputNameRef = React.createRef();

    this.state = {
      username: "",
      password: "",
      error: null
    }
  }

  componentDidMount() {
    this.inputNameRef.current.focus();
  }

  // onChangeUserName = event => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // };
  //
  // onChangePassword = event => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  onSubmit = event => {
    event.preventDefault();

    fetch(`${API_URL}/authentication/token/new?api_key=${API_KEY_3}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const { request_token} = data;
        fetch(
          `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
          {
            method: "POST",
            mode: "cors",
            headers: {
              "content-type" : "application/json"
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              request_token: request_token
            })
          }
        )
          .then(response => {
            if (response.status < 400) {
              return response.json()
            } else {
              throw response.json();
            }
          })
          .then(data => {
            console.log("data", data);
            this.props.updateIsAuth(true)
          })
          .catch(response => {
            response.then(error =>{
             this.setState({
               error: error.status_message
             })
            })
          })
    })
  };

  render() {
    return (
      <div className="form-login-container">
        <form
          className="form-login"
          onSubmit={this.onSubmit}
        >
          <h1 className="h3 mb-3 font-weight-normal text-center">
            Авторизация
          </h1>
          <div className="form-group">
            <label htmlFor="username">Пользователь</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Пользователь"
              name="username"
              value={this.state.username}
              ref={this.inputNameRef}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Пароль"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
          >
            Вход
          </button>
          {this.state.error ? (
            <div className="invalid-feedback">{this.state.error}</div>
          ) : null
          }
        </form>
      </div>
    );
  }
}

export default LoginForm;
