import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { profile } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          loading="lazy"
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-col md:flex-row items-center gap-10 mt-4'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled full-stack developer and graphic designer with over 3 years
          of hands-on experience building modern web applications. I specialize in
          the MERN stack (MongoDB, Express, React, Node.js) and have a strong
          background in creating visually stunning designs using Photoshop,
          Illustrator, and CorelDraw. I excel at turning complex ideas into
          clean, functional, and beautiful digital experiences. Let's work
          together to bring your vision to life!
        </motion.p>

        <motion.div
          variants={fadeIn("left", "", 0.5, 1)}
          className='relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] shrink-0'
        >
          <img
            src={profile}
            alt='profile'
            className='w-full h-full object-cover rounded-full bg-tertiary border-4 border-[#915EFF] shadow-card'
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
