import { useEffect, useState } from "react";

function Usefetch(apiPath, queryTerm = "") {
  const [data, setData] = useState([]);
  let api_key = import.meta.env.VITE_MOVIE_API_KEY;
  let url = import.meta.env.VITE_MOVIE_URL;

  useEffect(() => {
    const fetchMovies = async () => {
      fetch(`${url}${apiPath}?api_key=${api_key}&query=${queryTerm}`)
        .then((res) => res.json())
        .then((res1) => setData(res1.results));
    };

    fetchMovies();
  }, [apiPath]);
  return { data };
}

export default Usefetch;
