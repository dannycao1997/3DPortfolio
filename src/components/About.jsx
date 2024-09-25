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
              Full-Stack Software Engineer with a solid foundation in problem-solving, leadership, and technical expertise, transitioning from the automotive industry to developing innovative, high-performance software solutions. Proficient in Java, JavaScript, Spring Boot, React, and AWS, with hands-on experience across the Software Development Life Cycle (SDLC). Specializing in designing scalable, secure APIs and building resilient, data-driven applications, I excel at implementing CI/CD pipelines, deploying microservices, and collaborating in Agile environments to deliver robust solutions that meet diverse business needs. Passionate about continuous learning and staying on the cutting edge of technology, I am eager to contribute my skills to dynamic teams, working to create impactful applications that enhance the user experience and drive business success.
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