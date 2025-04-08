import React from 'react'
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import {
  IoShareOutline,
  IoStatsChart,
  IoStatsChartOutline,
} from "react-icons/io5";

const MainComponent = () => {
  return (
    <main className="sticky top-0flex w-[50%] h-full min-h-screen flex-col border-l-[.01em] border-r-[0.1em] border-gray-600">
    <h1 className="text-2xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
      Home
    </h1>
    <div className="border-t-[.01em] border-b-[0.1em] px-4 flex items-stretch py-4 space-x-2 border-gray-600 relative">
      <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
      <div className="flex flex-col w-full h-full">
        <input
          type="text"
          className="w-full h-full bg-transparent outline-none border-none p-4 border-gray-600 placeholder:text-2xl placeholder:text-gray-600"
          placeholder="What's happening?"
        />
        <div className="w-full flex justify-between items-center">
          <div></div>
          <div className="w-full max-w-[100px]">
            <button
              className="rounded-full bg-birdie px-4 py-2 w-full
      text-lg font-bold text-center hover:bg-birdie/70 transition 
      duration-200"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="border-b-[.01em] p-4 flex space-x-4 border-gray-600"
        >
          <div>
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <div className="text-white text-base">Jadon Smith</div>
                <div className="text-gray-500"> @TenLetters</div>
                <div className=" text-gray-500">
                  <BsDot />
                </div>
                <div className=" text-gray-500"> 1 hour ago</div>
              </div>
              <div>
                <BsThreeDots/>
              </div>
            </div>
            <div className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Optio expedita quae sapiente libero beatae sint fuga vel,
              debitis nesciunt cum atque temporibus nobis quasi
              necessitatibus laborum vitae quo reprehenderit, sed nostrum
              consectetur fugiat dicta amet ducimus? Rerum hic laborum,
              odit aliquam maxime quasi incidunt quaerat sit est ad fuga
              officia.
            </div>
            <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
            <div className="flex item-center justify-around space-x-20 mt-2 w-full">
              <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                <BsChat />
              </div>
              <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                <AiOutlineRetweet />
              </div>
              <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                <AiOutlineHeart />
              </div>
              <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                <IoStatsChartOutline />
              </div>
              <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                <IoShareOutline />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
  )
}

export default MainComponent