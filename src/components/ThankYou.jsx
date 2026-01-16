import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className='relative z-0 bg-primary h-screen flex flex-col justify-center items-center overflow-hidden'>
      <StarsCanvas />

      <motion.div variants={textVariant()}>
        <h1 className={`${styles.heroHeadText} text-center`}>
          Thank <span className='text-[#915EFF]'>You!</span>
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center px-6'
      >
        I've received your message and will get back to you as soon as possible.
        <br />
        Redirecting to home in {countdown} seconds...
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className='mt-10'
      >
        <Link
          to='/'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition duration-300'
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
