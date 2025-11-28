import React from "react";
import { Film } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-blue-700 px-10 py-7">
        <section className="flex flex-col sm:flex-row items-center text-center sm:text-start sm:items-star justify-between gap-5">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-3 text-white leading-8">
            <div
              className="sm:w-fit flex items-center justify-center gap-1 md:gap-2 px-3 md:px-0 cursor-pointer"
              onClick={() => {
                navigation("/");
              }}
            >
              <Film className="text-white size-8 md:w-10 md:h-10" />
              <h1 className="text-xl md:text-2xl font-bold capitalize text-white">
                movie app
              </h1>
            </div>
            <p className="text-gray-300">
              Discover movies, explore trending titles, and stay updated with
              the latest releases. Built with ❤️ for movie lovers.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold text-xl mb-5">Quick Links</h5>
            <ul className="text-gray-300 flex flex-col gap-3">
              <li>Home</li>
              <li>Popular Movies</li>
              <li>Upcoming</li>
              <li>Top Rated</li>
              <li>Search</li>
            </ul>
          </div>
        </section>
        <p className="w-full text-center text-white block p-5">
          &copy; 2025 MovieApp. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
