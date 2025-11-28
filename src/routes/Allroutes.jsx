import { Routes, Route } from "react-router-dom";
import { Home, Movies, MovieDetail, MovieSearch,NotFound } from "../pages";

function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home apiPath="movie/now_playing" />} />
        <Route
          path="movies/popular"
          element={<Movies apiPath="movie/popular" title={"popular movies"} />}
        />
        <Route
          path="movies/toprated"
          element={<Movies apiPath="movie/top_rated" title={"top rated movies"}  />}
        />
        <Route
          path="movies/upcoming"
          element={<Movies apiPath="movie/upcoming" title={"upcoming movies"}  />}
        />
        <Route path="movies/:movieId" element={<MovieDetail />} />
        <Route path="search" element={<MovieSearch apiPath="search/movie" />} />
        <Route path="*" element={<NotFound/>} pageTitle={"page not found"} />
      </Routes>
    </>
  );
}

export default Allroutes;
