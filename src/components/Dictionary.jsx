import React from "react";
import { useRef } from "react";
import { HiSpeakerWave } from "react-icons/hi2";

export const Dictionary = () => {
  const inputRef = useRef();

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    alert(inputValue);
  };
  return (
    <>
      <div className=" mx-5 my-5 min-h-156">
        <div className="flex justify-evenly items-center my-4 mx-5 py-2">
          <input
            type="text"
            ref={inputRef}
            className="border border-gray-300 w-72 py-2 rounded-3xl shadow-md shadow-gray-600 focus:outline-none px-5 "
          />
          <button
            onClick={handleClick}
            className="border border-gray-300 rounded-lg h-10 bg-white px-5 shadow-md shadow-gray-600 active:scale-90 hover:bg-gray-100 hover:font-semibold"
          >
            Search
          </button>
        </div>
        <div className="border border-gray-300 mx-3 min-h-120 px-8 py-5 rounded-2xl bg-white shadow-md shadow-gray-600">
          <div className=" py-3">
            <h1 className="font-bold text-2xl">
              Meaning of the word - "Thank"
            </h1>
          </div>
          <div className=" py-3">
            <p className="text-lg">
              Definitions From{" "}
              <a
                href=""
                className="underline font-semibold hover:text-gray-600"
              >
                Free Dictionary
              </a>
            </p>
          </div>
          <div className="flex items-center py-2">
            <button className="ml-10 mr-7 p-2 border border-gray-300 active:scale-90 rounded-full bg-gradient-to-bl from-green-300 to-yellow-300">
              <HiSpeakerWave />
            </button>
            <p className="tracking-widest">Thank [dfh]</p>
          </div>
          <div className="text-wrap py-2">
            <h1 className="font-bold text-2xl">Noun</h1>
            <p className="pl-10 py-3">Noun Meaning</p>
          </div>
          <div className="text-wrap py-2 ">
            <h1 className="font-bold text-2xl">Verb</h1>
            <p className="pl-10 py-3">Verb Meaning</p>
          </div>
          <div className="text-wrap py-2">
            <h1 className="font-bold text-2xl">References</h1>
            <p className="pl-10 py-3">
              <a
                href=""
                target="_blank"
                className="underline font-semibold hover:text-gray-600"
              >
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
