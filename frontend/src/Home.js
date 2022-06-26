import React from "react";

function Home() {
  return (
    <div>
      <div className="absolute -z-10 w-full h-full ">
        <img
          src="./pillbg.png"
          className="object-cover -object-left-20 w-full h-full md:aspect-auto"
          alt="bg"
        />
      </div>
      <div className="flex flex-col w-1/2 gap-20 ">
        <div className="text-6xl font-['Roboto'] font-thin p-2 top-10 left-10 relative">
          <div className="w-1/2">Is Your Medicine</div>
          <span className="animate-color-change font-bold "> SAFE</span> ?
        </div>
        <div className="relative mt-5 left-10 justify-start w-full">
          <div className="text-2xl font-['Montserrat'] text-justify space-y-4">
            <div>
              Know a lot more about the medicines you know about, their usage
              instructions to store and handling instructions.
            </div>
            <div>
              From storage to handling, we have everything you need to know.
            </div>
          </div>
          <div className="text-xl text-justify"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
