import {
  AiOutlineHeart,
  AiOutlineCloudDownload,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import { BiSolidShare, BiBookmark } from "react-icons/bi";

export const Hero = () => {
  return (
    <section className="px-4 md:px-16 flex flex-col md:flex-row justify-center md:justify-between items-center h-screen bg-[url('assets/images/oblivion.webp')] bg-cover bg-center after:content-[''] after:w-full after:h-1/4 after:bg-gradient-to-t after:from-slate-900 after:from-5% after:absolute after:bottom-0 after:left-0 after:z-[1]">
      <div className="w-full md:w-1/2 z-[999]">
        <ul
          id="rating"
          className="flex text-white gap-4 items-center md:text-md text-sm">
          <li className="bg-blue-400 px-4 py-1 rounded-md">PREMIUM</li>
          <li className="bg-red-700 px-4 py-1 rounded-md">18+</li>
          <li className="bg-yellow-400 px-4 py-1 rounded-md">9.82</li>
        </ul>
        <h1 className="text-[2rem] md:text-[3rem] leading-normal lg:text-[4rem] font-bold text-white">
          TOM CRUISE OBLIVION
        </h1>
        <p className="text-sm md:text-[1rem] text-white font-medium">
          2022 | 182 min | English
        </p>
        <div className="text-white font-medium py-10 text-sm md:text-[1rem]">
          <p>
            <span className="text-red-500">Genre: </span> Sci-fi, Adventure
          </p>
          <p>
            <span className="text-red-500">Overview: </span> Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ad commodi corporis, atque
            odio obcaecati impedit!
          </p>
          <p>
            <span className="text-red-500">Cast: </span> Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div className="flex items-center gap-8 text-white text-[1.5rem]">
          <AiOutlineHeart className=" cursor-pointer" />
          <AiOutlineCloudDownload className=" cursor-pointer" />
          <BiSolidShare className=" cursor-pointer" />
          <BiBookmark className=" cursor-pointer" />
        </div>
      </div>
      <aside className="hidden w-1/2 md:grid place-content-center z-[999]">
        <AiOutlinePlayCircle className="text-[10rem] opacity-30 text-white cursor-pointer hover:opacity-60 transition-all" />
      </aside>
    </section>
  );
};
