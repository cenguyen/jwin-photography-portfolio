import React from "react";
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
// import Link
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
            Howl uncontrollably for no reason sleep over your phone and make cute snoring noises funny little cat chirrup noise shaking upright tail when standing next to you or more napping, more napping all the napping is exhausting make plans to dominate world and then take a nap.
            <br />
            <br />
            Meowzer tuxedo cats always looking dapper for chew foot, and and sometimes switches in french and say "miaou" just because well why not or murr i hate humans they are so annoying chew master's slippers.
            </p>
            <Link to={'/contact'} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire Me
            </Link>
          </div>
          {/* image grid */}
          <div className="grid grid-cols-2 lg:gap-2">
          {/* images */}
            <div className="max-w-[250] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Image1} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
            </div>
            <div className="max-w-[250] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Image2} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
            </div>
            <div className="max-w-[250] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Image3} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
            </div>
            <div className="max-w-[250] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Image4} alt="" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Portfolio;
