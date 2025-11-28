import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { convertMinutes, convertCrores } from "../../utlis/utlis";

function MovieDetailCard() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  let api_key = import.meta.env.VITE_MOVIE_API_KEY;
  let url = import.meta.env.VITE_MOVIE_URL;

  let averageRating = Number(movie?.vote_average || 0).toFixed(1);
  useEffect(() => {
    const fetchMovies = async () => {
      fetch(`${url}movie/${movieId}?api_key=${api_key}`)
        .then((res) => res.json())
        .then((res1) => setMovie(res1));
    };

    fetchMovies();
  }, []);

  return (
    <>
      <section className="w-4/5 md:w-11/12 lg:w-4/5 xl:w-3/4 grid grid-cols-1 md:grid-cols-3 py-14 gap-5 md:gap-7 lg:gap-10 items-center justify-items-center">
        <div className="w-full h-full md:col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="black_panther"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-5 md:p-5">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl capitalize font-bold line-clamp-1 text-white mb-2">
              {movie.title}
            </h2>
            <p className="flex gap-2 text-sm text-gray-400">
              <span>{movie.release_date}</span>|
              <span>{convertMinutes(movie.runtime)}</span>|
              <span>
                {averageRating}{" "}
                <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
              </span>
            </p>
          </div>
          <ul className="flex items-center justify-start gap-3 md:gap-5">
            {movie?.genres?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="py-1 px-3 bg-blue-400 text-sm lg:text-base rounded-2xl text-blue-950 font-semibold"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <p className="text-gray-100 capitalize text-sm leading-8">
            {movie.overview}
          </p>
          <ul className="flex flex-col items-start justify-center gap-3 text-gray-100">
            <li className="flex items-center justify-start gap-10 text-sm lg:text-base capitalize">
              <span className="font-semibold text-gray-400">Budget</span>{" "}
              <span>{convertCrores(movie.budget)}</span>
            </li>
            <li className="flex items-center justify-start gap-10 text-sm lg:text-base capitalize">
              <span className="font-semibold text-gray-400">status</span>{" "}
              <span> {movie.status}</span>
            </li>
            <li className="flex items-center justify-start gap-10 text-sm lg:text-base capitalize">
              <span className="font-semibold text-gray-400">Revenue</span>{" "}
              <span>{convertCrores(movie.revenue)}</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default MovieDetailCard;
