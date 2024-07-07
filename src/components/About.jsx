import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
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
              <a href="https://www.linkedin.com/in/dannycao97/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-800">
                  https://www.linkedin.com/in/dannycao97/
              </a>
              <br />
              <a href="https://github.com/dannycao1997" target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-800">
                  https://github.com/dannycao1997
              </a>
          </motion.div>

          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
              Transitioning seamlessly from nearly ten years in automotive service diagnostics, I bring a unique blend of analytical prowess and client-focused dedication to the software development field. My deep technical expertise and leadership experience enable me to tackle complex software challenges with precision. Proficient in Java, Spring Boot, and modern front-end technologies, I specialize in creating robust, scalable applications that drive results and exceed client expectations. My proven ability to translate diagnostic skills into software solutions makes me an asset in any development team.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
  );
};

export default SectionWrapper(About, "about");