import axios from "axios";

const base = 'http://localhost:8000/api';

const instance = axios.create({
  baseURL: base,
  headers: {
    'Accept': 'application/json'
  }
})

export default instance;