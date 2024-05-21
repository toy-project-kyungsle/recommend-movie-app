import { MovieDataType } from '@/type/movie';
import apiInstance from './apiInstance';

const getMoviesFromServer = async (props: { [x: string]: string }) => {
  const queryParams = new URLSearchParams(props).toString();
  const response = await apiInstance.get(`/list_movies.json?${queryParams}`);
  if (!response || response.data.status === 'error') return [];
  return response.data.data.movies as MovieDataType[];
};

const getOneMovieFromServer = async (props: { [x: string]: string }) => {
  const queryParams = new URLSearchParams(props).toString();
  const response = await apiInstance.get(`/movie_details.json?${queryParams}`);
  if (!response || response.data.status === 'error') return { id: null, imdb_code: null };
  return response.data.data.movie as MovieDataType;
};

export { getMoviesFromServer, getOneMovieFromServer };
