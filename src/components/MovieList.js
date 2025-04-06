import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  // console.log(movies);
  return (
    <div className="px-6">
       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
       <div className="flex overflow-x-scroll">
         <div className="flex">
                    {movies?.length > 0 ? (
            movies?.map((movie, index) => (
              <MovieCard key={movie.id || index} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-white">No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;



//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}



      
