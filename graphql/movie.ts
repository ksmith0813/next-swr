export const GET_MOVIES = `
  query GetMovies($search:String) {
    movies(search:$search) {
      Search {
        imdbID
        Title
        Type
        Year
      }
    }
  }
`;

export const GET_MOVIE = `
  query GetMovie($imdbId: String) {
    movie(imdbId:$imdbId) {
      imdbRating
      imdbVotes
      Actors
      Awards
      BoxOffice
      Country
      DVD
      Director
      Genre
      Language
      Metascore
      Plot
      Poster
      Production
      Rated
      Ratings {
        Source
        Value
      }
      Released
      Runtime
      Title
      Type
      Writer
      Year
    }
  }
`;
