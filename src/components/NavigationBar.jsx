import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";

export const NavigationBar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  function onSubmitHanlder(event) {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword !== "") {
      navigate(`/search/${keyword}`);
    }
  }

  return (
    <nav className="px-4 lg:px-16 py-4 fixed w-full text-white flex flex-wrap justify-between items-center bg-slate-900 z-[9999]">
      <h1>
        <Link to={"/"} className="text-[1.5rem] font-bold">
          MovieStar
        </Link>
      </h1>
      <ul className="flex justify-center items-center gap-4 font-medium text-md">
        <li>Movie</li>
        <li>People</li>
        <li>More</li>
      </ul>
      <form
        onSubmit={onSubmitHanlder}
        className="relative mt-2 sm:mt-0 w-full sm:w-fit">
        <button className="absolute top-1/2 -translate-y-1/2 right-3 text-[1.5rem] text-slate-400">
          <BiSearch />
        </button>
        <input
          type="text"
          placeholder="Search here..."
          ref={searchRef}
          name="search"
          id="search"
          className="bg-slate-950 pl-3 pr-10 w-full sm:w-52 py-2 rounded-md text-slate-400 font-semibold"
        />
      </form>
    </nav>
  );
};
