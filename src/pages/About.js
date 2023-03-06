import React from "react";
// import images
import WomanImg from '../img/about/woman.png';
// import Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
            Howl uncontrollably for no reason sleep over your phone and make cute snoring noises funny little cat chirrup noise shaking upright tail when standing next to you or more napping, more napping all the napping is exhausting make plans to dominate world and then take a nap.
            <br />
            <br />
            Meowzer tuxedo cats always looking dapper for chew foot, and and sometimes switches in french and say "miaou" just because well why not or murr i hate humans they are so annoying chew master's slippers.
            </p>
            <Link to={'/portfolio'} className='btn'>View My Work</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
};

export default About;
