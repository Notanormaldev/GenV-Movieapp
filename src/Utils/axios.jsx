import axios from "axios";

const instance = axios.create ({
  baseURL:"https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, 
    accept: "application/json",
  }
})

export default instance;