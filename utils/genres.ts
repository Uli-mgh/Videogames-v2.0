import axios from "axios";
import { Genre } from "../typings";
// const url = "https://api.rawg.io/api/genres"
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Genres {
  [key: string]: Genre[] | any;
}

const genresData = async () => {
  let genres: Genres = [];

  const genresApi = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  genresApi.data.results.forEach((e: Genres) => {
    genres.push({ id: e.id, name: e.name });
  });

  return genres;
};
export default genresData;
