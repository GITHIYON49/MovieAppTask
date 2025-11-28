import { MovieList } from "../../components";

function Movies({ apiPath,title }) {
  return (
    <>
      <MovieList apiPath={apiPath} title={title} />
    </>
  );
}

export default Movies;
