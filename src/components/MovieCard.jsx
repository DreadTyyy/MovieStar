import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";

export const MovieCard = ({ movie }) => {
  return (
    <div className="group flex flex-col min-w-[125px] md:min-w-[240px] rounded-lg border border-slate-500 shadow-xl shadow-slate-950 relative object-cover cursor-pointer after:content-[''] after:w-full after:h-full after:bg-gradient-to-t after:from-black after:absolute after:top-0 after:left-0 after:z-[1] after:rounded-lg overflow-hidden">
      <div className="h-[160px] md:h-[140px] object-cover object-center flex justify-center items-center overflow-hidden">
        <img
          className="group-hover:brightness-[30%] transition-all"
          src={`${import.meta.env.VITE_APP_BASEIMAGEURL}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <p className="absolute bottom-2 left-2 text-white text-sm md:text-[1rem] opacity-100 md:group-hover:opacity-0 transition-all z-[99]">
        {movie.title}
      </p>
      <div className="absolute w-full text-left text-white bottom-4 left-2 opacity-0 md:group-hover:opacity-100 transition-all z-[99]">
        <h5 className="text-sm md:text-[1rem] font-medium leading-tight">
          {movie.title}
        </h5>
        <p className="text-sm md:text-[1rem] leading-loose mb-2">
          {movie.release_date}
        </p>
        <div className="flex gap-4 text-slate-400">
          <a className="p-2 gap-2 flex items-center justify-center border-black w-fit bg-slate-900 text-[0.6rem] md:text-[0.8rem] rounded-md hover:bg-slate-950">
            <AiOutlinePlayCircle className="text-sm md:text-[1rem]" />
            <p className="leading-none font-semibold">Tonton Sekarang</p>
          </a>
          <a className="p-2 border-black w-fit bg-slate-900 text-sm md:text-[1rem] rounded-full hover:bg-slate-950">
            <IoAdd />
          </a>
        </div>
      </div>
    </div>
  );
};
