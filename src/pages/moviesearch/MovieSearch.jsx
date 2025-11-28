import { useSearchParams } from "react-router-dom";
import Usefetch from "../../hooks/Usefetch";
import { Card } from "../../components";

function MovieSearch({ apiPath }) {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  const { data: movies } = Usefetch(apiPath, queryTerm);
  return (
    <>
      <div className="w-full sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 py-10 items-start justify-items-center">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="w-4/5 sm:w-full">
              <Card movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieSearch;
