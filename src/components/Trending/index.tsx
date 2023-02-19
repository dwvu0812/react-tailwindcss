import React from "react";
import MovieCard from "./MovieCard";
import { moviesData } from "./moviesData";

const Trending = () => {
  return (
    <>
      <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
      <div className="grid  md:grid-cols-4 grid-cols-2 gap-10 mb-12">
        {moviesData.map((movie, index) => <MovieCard key={index} movie={movie}/>)}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-out duration-500">Load more</button>
      </div>
    </>
  );
};

export default Trending;
