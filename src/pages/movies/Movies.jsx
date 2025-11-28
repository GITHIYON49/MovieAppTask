import { MovieList } from "../../components";

function Movies({ apiPath }) {
  return (
    <>
      <MovieList apiPath={apiPath} />
    </>
  );
}

export default Movies;
