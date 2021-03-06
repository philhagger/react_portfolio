export const getDefaultUser = userId => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return Promise.resolve(user); // As the alternative is a http request any component is expecting a promise.
    } else {
      // const url = 'https://jsonplaceholder.typicode.com/users/7';
      const url = `http://localhost:3001/users/${userId}`;
      return fetch(url).then(response => response.json()); //add another .then() if you need to process the user result.
    }
  } catch (e) {}
};

export const getAllUsers = () => {
  const url = `http://localhost:3001/users`;
  return fetch(url).then(response => response.json());
};

export const getUserData = userId => {
  // const url = 'https://jsonplaceholder.typicode.com/users/7';
  const url = `http://localhost:3001/users/${userId}`;
  return fetch(url).then(response => response.json()); //add another .then() if you need to process the user result.
};
