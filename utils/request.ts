import axios from "axios";
import { Games, Genre, Requirement } from "../typings";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const BASE_URL = "https://api.rawg.io/api"

interface Props {
  gamesInfo: Games[];
  [key: string]: any;
}

// interface EnumServiceItems extends Array<Props>{}

const apiInfo = async () => {
  let gamesInfo: Props | any = [];

  for (let i = 1; i < 2; i++) {
    gamesInfo.push(
      axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
    );
  }

  return Promise.all(gamesInfo).then((response) => {
    let pages: Props | any = [];
    let output: Props | any = [];

    for (let i = 0; i < response.length; i++) {
      pages = [...pages, response[i].data.results];
    }

    pages.map((el: Props) => {
      el.forEach((element: Props) => {
        output.push({
          id: element.id,
          name: element.name,
          image: element.background_image,
          rating: element.rating.toFixed(2),
          genres: element.genres
            .map((g: Genre) => g.name)
            .join(", ")
            .trim(),
        });
      });
    });
    return output;
  });
};

export default apiInfo