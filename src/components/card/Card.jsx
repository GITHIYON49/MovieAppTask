import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyImage } from "../../assets";

function Card({ movie }) {
  const [selectedStar, setSelectedStar] = useState(0);
  const [selectedStarHover, setSelectedStarHover] = useState(0);
  const navigation = useNavigate();
  const { poster_path, vote_average, overview, release_date, title, id } =
    movie;
  let averageRating = Number(vote_average || 0).toFixed(1);
  const handleClick = (id) => {
    navigation(`/movies/${id}`);
  };

  const handleSelectedStart = (value) => {
    setSelectedStar(value);
  };

  const handleMouseHover = (value) => {
    if (selectedStar < 0) {
      setSelectedStarHover(0);
    } else if (selectedStar > 0) {
      selectedStarHover(selectedStar);
    } else {
      setSelectedStarHover(value);
    }
  };
  const handleMouseOut = (value) => {
    setSelectedStarHover(value);
  };
  return (
    <>
      <div
        className="h-full w-full bg-blue-500/80 rounded-xs overflow-hidden shadow-lg ring-1 ring-blue-500 shadow-blue-600 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
        onDoubleClick={() => handleClick(id)}
      >
        <div>
          <img
            src={`${
              poster_path === null
                ? emptyImage
                : ` https://image.tmdb.org/t/p/w500/${poster_path}`
            }`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex flex-col justify-center gap-3.5 text-white">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg capitalize font-semibold text-blue-950 line-clamp-1">
              {title}
            </h3>
            <p className="text-lg text-gray-50">
              <span className="text-blue-950">{averageRating}/</span>10
            </p>
          </div>
          <p className="text-base line-clamp-3 text-gray-300">{overview}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-50">
              <span>{release_date}</span>
            </p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => {
                return (
                  <span
                    key={index}
                    className={`text-gray-100 ${
                      selectedStar <= index ? " " : "text-yellow-400"
                    }${selectedStarHover <= index ? "" : "text-yellow-400"}`}
                    onMouseOver={() => {
                      handleMouseHover(index + 1);
                    }}
                    onMouseOut={() => {
                      handleMouseOut(0);
                    }}
                    onClick={() => {
                      handleSelectedStart(index + 1);
                    }}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
