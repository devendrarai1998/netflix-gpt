import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieResults, movieNames} = useSelector(store => store.gpt);

  console.log(movieNames);
  console.log(typeof (movieNames));
  const resultArray = movieResults ? Object.values(movieResults) : [];
  console.log(resultArray);
  console.log(typeof (resultArray));

  if(!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        { movieNames != null && movieNames.length > 0 ? (
          movieNames.map((movieName, index) => ( 
          <MovieList 
            key={movieName}
            title={movieName}
            movies = {movieResults[index]}
          />   
        ))
      ) : (
        <p>No Movies Available</p>
        )}
      </div>
      {movieNames}
    </div>
  )
};

export default GptMovieSuggestion;