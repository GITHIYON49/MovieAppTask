import { useSearchParams, useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
import Usefetch from "../../hooks/Usefetch";
import { Card } from "../../components";

function MovieSearch({ apiPath }) {
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();

  const queryTerm = searchParams.get("q");
  const { data: movies } = Usefetch(apiPath, queryTerm);
  const handleClick = () => {
    navigation("/");
  };
  return (
    <>
      <section>
        {movies.length == 0 ? (
          <div className="flex flex-col gap-5 items-center justify-center">
            <p className="text-xl capitalize text-white">
              movie not found{" "}
              <span className="text-sky-500">{`${queryTerm}`}</span>
            </p>
            <button
              className="flex items-center justify-center gap-3 bg-white border-2 border-blue-600 text-blue-600 outline-none active:scale-105 transition-all duration-300 ease-in-out px-5 py-3 rounded-2xl cursor-pointer font-semibold"
              onClick={handleClick}
            >
              Go to home <MoveRight className="size-6" />
            </button>
          </div>
        ) : (
          <div className="w-full sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10 py-10 items-start justify-items-center">
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="w-4/5 sm:w-full">
                  <Card movie={movie} />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default MovieSearch;
