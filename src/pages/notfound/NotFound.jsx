import React from "react";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { pageNotFound } from "../../assets";

function NotFound() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/");
  };
  return (
    <>
      <section className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3">
          <img
            src={pageNotFound}
            alt="pagenotfound-image"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          className="flex items-center justify-center gap-3 bg-white border-2 border-blue-600 text-blue-600 outline-none active:scale-105 transition-all duration-300 ease-in-out px-5 py-3 rounded-2xl cursor-pointer font-semibold"
          onClick={handleClick}
        >
          Go to home <MoveRight className="size-6" />
        </button>
      </section>
    </>
  );
}

export default NotFound;
