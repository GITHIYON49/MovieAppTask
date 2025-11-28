import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchIteam = e.target.search.value;
    e.target.value = " ";
    navigation(`/search?q=${searchIteam}`);
  };
  return (
    <>
      <section className="w-full bg-gray-100 text-blue-700 grid grid-cols-1 md:grid-cols-2 items-center justify-start py-16 md:py-24">
        <div className="w-11/12 sm:w-4/5 md:w-11/12 mx-auto flex flex-col gap-7 md:gap-10 text-center md:text-start ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 md:leading-12 lg:leading-14">
            Discover Movies That Match Your Mood
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Explore trending films top-rated picks and hidden gems all in one
            place.
          </p>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row gap-5"
          >
            <input
              type="text"
              name="search"
              placeholder="Search your favourites"
              className="w-full sm:w-3/5 py-3 px-5 outline-none border-2 border-blue-700 rounded-lg text-black"
            />
            <button
              type="submit"
              className="w-full sm:w-2/5 flex text-white items-center justify-center gap-2 font-semibold tracking-wider capitalize text-lg py-3 px-5 bg-blue-600 ring-1 ring-blue-500 hover:bg-blue-700 active:scale-105 transition-all duration-200 ease-in-out text-end rounded-lg cursor-pointer outline-none"
            >
              Search
              <Search className="w-6 h-6" />
            </button>
          </form>
        </div>
        <div className="w-full"></div>
      </section>
    </>
  );
}

export default Hero;
