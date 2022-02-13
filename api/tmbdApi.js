import axios from "axios";

export const INFO_URL =
  "https://api.themoviedb.org/3/tv/60625?api_key=527ae7f5edbd5ac075ab45a9c2c572ac";
export const CREDITS_URL =
  "https://api.themoviedb.org/3/tv/60625/aggregate_credits?api_key=527ae7f5edbd5ac075ab45a9c2c572ac";
export const MAINCHARACTERS_URL =
  "https://api.themoviedb.org/3/tv/60625/credits?api_key=527ae7f5edbd5ac075ab45a9c2c572ac";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const tmbdApi = axios.create({});

// https://image.tmdb.org/t/p/original/8aCek7W6BovH7M4enWjqrGptvQ8.jpg
// https://api.themoviedb.org/3/tv/60625-rick-and-morty/images?api_key=527ae7f5edbd5ac075ab45a9c2c572ac
