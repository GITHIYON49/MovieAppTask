import { useState, useEffect } from "react";
import Usefetch from "../../hooks/Usefetch";
import Card from "../card/Card";

function MovieList({ apiPath,title }) {
  const { data } = Usefetch(apiPath);
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    if (data) {
      setmovies(data);
    }
  }, [data]);

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-7 md:py-10 gap-7 lg:gap-10">

       {
        title ?  <h2 className="w-4/5 sm:w-11/12 text-start text-2xl lg:text-3xl capitalize font-semibold text-white">{title}</h2> : " "
       }
        <div className="w-full sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10  items-center justify-items-center">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="w-4/5 sm:w-full">
                <Card movie={movie} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MovieList;
