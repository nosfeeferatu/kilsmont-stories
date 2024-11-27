import React from "react";

const Subscribe = () => {
  return (
    <section>
      <div className="container mx-auto py-5">
        <div className="text-center">
          <h2 className="font-bold text-2xl pb-5">
            Subscribe for New Chapters
          </h2>
        </div>
        <form
          className="flex justify-between mx-auto max-w-[500px] border-2 border-black rounded-md ps-4"
          action=""
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 pe-4"
            name=""
            id=""
          />
          <button type="submit" className="py-2 px-4 border-l-2 border-black">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
