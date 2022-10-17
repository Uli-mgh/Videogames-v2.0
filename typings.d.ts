
export interface Genre {
  id: number,
  name: string,
}

 export interface Requirement {
  minimum: string,
  recommended: string,
}


export interface Games {
  id:number,
  name: string,
  image: string,
  rating: number,
  requirements_en: { [key: string]: Requirement},
  genres: [Genre]
}



