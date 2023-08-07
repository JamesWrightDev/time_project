import axios from 'axios';

const baseURL = 'http://localhost:3000';
export const fetcher = (path: string) =>
  axios
    .get(`${baseURL}${path}`, { headers: { Authorization: 'mysecrettoken' } })
    .then((res) => res.data);
