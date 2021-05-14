import axios from 'axios';

const USERS = '/users';

export const getUsers = () => axios.get(`http://localhost:8000${USERS}`);
