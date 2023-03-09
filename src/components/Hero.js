import React from 'react';
import Header from './Header';
import calrolies from '../assets/calories.png';
import heroImage from '../assets/hero_image.png';
import heart from '../assets/heart.png';
import heroImageBack from '../assets/hero_image_back.png';

const Hero = () => {
  return (
    <div className="flex flex-col  lg:flex-row lg:justify-between">
      <div className="lg:basis-3/4 xl:basis-[70%] pl-8 pt-6">
        <Header />
        <div className="flex justify-center md:scale-125 lg:ml-0 mx-auto mt-20 py-4 px-5 text-white bg-[#363d42] rounded-full w-fit uppercase text-lg font-medium lg:scale-100">
          <span>the best fitness club in the town</span>
        </div>
        <div className="text-3xl font-bold mx-20 mt-12 uppercase text-white md:text-7xl">
          <div className="mb-8">
            <span className="stroke-text">Achieve </span>
            <span>your</span>
          </div>
          <span className="mx-10 md:mx-0">Ideal body</span>
        </div>
        <p className="text-xl text-white mt-4">
          Here we will help you shape and build your ideal body and live your
          life to the fullest
        </p>
        <div className="flex gap-8 items-end text-white uppercase mt-8">
          <div className=" flex flex-col gap-2 items-start">
            <span className="text-3xl font-medium">+ 150</span>
            <span className="text-xl text-gray-400">expert coaches</span>
          </div>
          <div className=" flex flex-col gap-2 items-start">
            <span className="text-3xl font-medium">+ 958</span>
            <span className="text-xl text-gray-400">members joined</span>
          </div>
          <div className=" flex flex-col gap-2 items-start">
            <span className="text-3xl font-medium">+ 50</span>
            <span className="text-xl text-gray-400">fitness plans</span>
          </div>
          <div className="flex gap-10 p-4 bg-slate-500 bg-opacity-25 rounded-lg">
            <div className="w-12">
              <img src={calrolies} alt="calories" />
            </div>
            <div className="flex flex-col gap-5 text-opacity-25 ">
              <span className="text-gray-400">Calories burned</span>
              <span className="text-2xl">520 kcal</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8 text-white">
          <button className=" bg-orange-400 px-8 py-3">Get Started</button>
          <button className="border-2 border-orange-400 px-9 py-3">
            Learn More
          </button>
        </div>
      </div>

      {/* right side */}

      <div className="lg:basis-1/4 xl:basis-[30%] relative lg:bg-orange-400">
        <div className="text-black bg-white w-fit px-8 py-3 lg:absolute lg:right-3 lg:top-3">
          <button>Join Now</button>
        </div>
        <div className="flex flex-col absolute top-20 right-0 bg-gray-600 w-fit py-3 px-5 rounded-lg shadow-md ">
          <img src={heart} alt="heart-img" className="w-12" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <div className="w-3/4 absolute top-20">
          <img src={heroImage} alt="hero-img " />
        </div>

        <img
          src={heroImageBack}
          alt="hero-img-back"
          className="absolute top-20 right-96 w-2/4 z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
