import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import amharicwords from '@/data/amharicwords';
import englishwords from '@/data/englishwords';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

function getWords(lang: string) {
  const words = [];
  if (lang == 'am') {
    words.push(...amharicwords);
  } else {
    const { level1, level2, level3, level4 } = englishwords;
    words.push(...level1, ...level2, ...level3, ...level4);
  }
  return words;
}
function Search() {
  const { pathname } = useLocation();
  const lang = useSearchParams()[0].get('lang');
  const words = getWords(lang);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterdWords, setFilterdWords] = useState<string[]>();
  const { search } = useLocation();
  useEffect(() => {
    setFilterdWords(
      words.filter((word) => {
        return word.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm]);
  return (
    <div
      className={`${pathname.startsWith('/select-level') ? '' : 'invisible'} `}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onBlur={() => setTimeout(() => setSearchTerm(''), 500)}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="search"
          value={searchTerm}
          className="block text-white  w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  bg-transparent"
          required
        />
        <p className="text-white absolute top-0 right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
          Search
        </p>
      </div>
      <div
        className={`${
          searchTerm.length ? 'block' : 'hidden'
        } absolute bg-white z-10 flex flex-col top-14 right-7 w-[22%]`}
      >
        {filterdWords?.slice(0, 6).map((word, i) => {
          return (
            <>
              <Link
                to={`/game${search}&search=${word}`}
                key={i}
                className="text-center text-black"
              >
                {word}
              </Link>
              <div className="w-full h-[1px] bg-slate-200"></div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Search;
