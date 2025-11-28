import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Film, Menu, X } from "lucide-react";
import { navigationData } from "../../data/route";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigate();
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleNavigate = (val) => {
    if (window.innerWidth < 768) {
      setShowMenu(!showMenu);
    }
    navigation(val);
  };
  return (
    <>
      <header className="w-full h-20 bg-blue-700 flex items-center justify-center sticky top-0 z-50 shadow-md shadow-blue-800">
        <nav className="w-full md:w-11/12 mx-auto flex items-center justify-between relative">
          <div
            className="flex items-center justify-center gap-1 md:gap-2 px-3 md:px-0 cursor-pointer"
            onClick={() => {
              navigation("/");
            }}
          >
            <Film className="text-white size-8 md:w-10 md:h-10" />
            <h1 className="text-xl md:text-2xl font-bold capitalize text-white">
              movie app
            </h1>
          </div>
          <ul
            className={`w-full md:w-auto absolute h-[90vh] md:h-auto top-16 ${
              showMenu ? "translate-0" : "-translate-x-full"
            } transition-all md:translate-none duration-300 ease-in-out bg-blue-500 md:bg-transparent md:flex md:static md:items-center md:justify-center gap-5 md:gap-10 capitalize font-semibold text-white`}
          >
            {navigationData.map((list) => {
              return (
                <li
                  key={list.id}
                  className="cursor-pointer p-4 md:p-0 hover:bg-blue-600 md:hover:bg-transparent transition-all duration-200 ease-in-out"
                  onClick={() => handleNavigate(list.route)}
                >
                  {list.title}
                </li>
              );
            })}
          </ul>

          <button
            className="block md:hidden text-white border-none outline-none cursor-pointer p-3 hover:bg-white hover:text-blue-700"
            onClick={handleClick}
          >
            {showMenu ? <X className="size-8" /> : <Menu className="size-8" />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
