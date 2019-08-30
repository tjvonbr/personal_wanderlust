import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};
const register = (userCredentials) => {
    axios.post('http://localhost:3300/', userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/register');
      }
  };
  