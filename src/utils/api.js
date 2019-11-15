export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

export const callApi = (url = "", options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/${url}`, options)
      .then(response => {
        if (response.status < 400) {
          return response.json()
        } else {
          throw response.json();
        }
      })
      .then(data => {
        resolve(data);
      })
  });

};
