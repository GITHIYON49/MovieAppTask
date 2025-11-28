import React from "react";
import { Hero, MovieList } from "../../components";

function Home({ apiPath }) {
  return (
    <>
      <Hero />
      <MovieList apiPath={apiPath} />
    </>
  );
}

export default Home;
