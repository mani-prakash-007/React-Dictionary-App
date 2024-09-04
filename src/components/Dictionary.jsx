import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { HiSpeakerWave } from "react-icons/hi2";

export const Dictionary = () => {
  const inputRef = useRef();

  //States
  const [wordData, setWordData] = useState("");

  //Spell Word
  const spellWord = (word) => {
    const reader = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(reader);
  };

  //Handle Click
  const handleClick = async () => {
    try {
      const inputValue = inputRef.current.value;
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );
      setWordData(response);
    } catch (error) {
      setWordData(error.response);
    }
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
          {!wordData ? (
            <>
              <div className="flex flex-col justify-center items-center text-wrap py-2 ">
                <h1 className="font-bold text-2xl">Search for a Word...</h1>
              </div>
            </>
          ) : wordData.status == 200 ? (
            <>
              <div className=" py-3">
                <h1 className="font-bold text-2xl">
                  Meaning of the word - {`"${wordData.data[0].word}"`}
                </h1>
              </div>
              <div className=" py-3">
                <p className="text-lg">
                  Definitions From{" "}
                  <a
                    href="https://www.thefreedictionary.com/"
                    target="_blank"
                    className="underline font-semibold hover:text-gray-600"
                  >
                    Free Dictionary
                  </a>
                </p>
              </div>
              <div className="flex items-center py-2">
                <button
                  onClick={() => spellWord(wordData.data[0].word)}
                  className="ml-10 mr-7 p-2 border border-gray-300 active:scale-90 rounded-full bg-gradient-to-bl from-green-300 to-yellow-300"
                >
                  <HiSpeakerWave />
                </button>
                <p className="tracking-widest">{`${wordData.data[0].word} [ ${
                  wordData.data[0].phonetics == undefined
                    ? wordData.data[0].phonetics[0].text
                    : wordData.data[0].phonetic
                } ]`}</p>
              </div>
              {wordData.data[0].meanings.map((data) => {
                return (
                  <div className="text-wrap py-2 ">
                    <h1 className="font-bold text-2xl">
                      {data.partOfSpeech.toUpperCase()}
                    </h1>
                    <p className="pl-10 py-3">
                      {data.definitions[0].definition}
                    </p>
                  </div>
                );
              })}
              <div className="text-wrap py-2">
                <h1 className="font-bold text-2xl">References</h1>
                <p className="pl-10 py-3">
                  <a
                    href={wordData.data[0].sourceUrls[0]}
                    target="_blank"
                    className="underline font-semibold hover:text-gray-600"
                  >
                    Click Here
                  </a>
                </p>
              </div>
            </>
          ) : (
            wordData.status == 404 && (
              <>
                <div className="flex flex-col justify-center items-center text-wrap py-2 ">
                  <h1 className="font-bold text-2xl">{wordData.data.title}</h1>
                  <p className="py-10 text-wrap">{wordData.data.message}</p>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

{
  /* <>





</> */
}
