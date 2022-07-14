import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { wordAnimation, container, item } from '../../shared/animation';
import ScrollProgress from '../../shared/ScrollProgress';
import profilePic from '../../../public/assets/ProfilePic.jpg';
import BlurryAnimation from '../BlurryAnimation';

const Hero = () => {
  const [activeWord, setActiveWord] = useState('designer');
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prevState) =>
        prevState === 'designer'
          ? 'photographer'
          : prevState === 'photographer'
          ? 'developer'
          : 'designer'
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative ">
      <aside className="fixed top-4 left-4 w-12 h-12">
        <ScrollProgress pathLength={pathLength} />
      </aside>
      <motion.header
        className="flex w-screen h-screen justify-center items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-0">
          <BlurryAnimation />
          <div className="flex gap-x-6 relative z-50 backdrop-blur-lg bg-black/30 p-20 rounded-3xl shadow-xl">
            <motion.div
              variants={item}
              key="photo"
              layoutId="photo"
              className="rounded-full ring ring-blue-400 ring-offset-4 ring-offset-[#53426f] relative overflow-hidden w-32 h-32"
            >
              <Image
                src={profilePic}
                alt="Profile picture of Peter McCrae Hokenson"
                layout="fill"
                priority
              />
            </motion.div>
            <motion.div variants={item} key="name" className="relative z-50 ">
              <h1 className="font-serif text-[75px] leading-[80px] relative">
                Hi, I'm Peter
                {/* <span className="text-2xl absolute top-10 -right-6">✌️</span> */}
              </h1>
              <div className="flex gap-x-2 text-center justify-start w-full">
                <LayoutGroup>
                  <motion.p className="font-sans text-3xl text-gray-400" layout>
                    I am a{' '}
                  </motion.p>
                  <AnimatePresence exitBeforeEnter>
                    {activeWord === 'designer' ? (
                      <motion.p
                        variants={wordAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key="designer"
                        className="font-sans text-3xl text-gray-400 "
                      >
                        designer
                      </motion.p>
                    ) : activeWord === 'photographer' ? (
                      <motion.p
                        variants={wordAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key="photographer"
                        className="font-sans text-3xl text-gray-400"
                      >
                        photographer
                      </motion.p>
                    ) : (
                      <motion.p
                        variants={wordAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        key="developer"
                        className="font-sans text-3xl text-gray-400"
                      >
                        developer
                      </motion.p>
                    )}
                  </AnimatePresence>
                </LayoutGroup>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </section>
  );
};

export default Hero;
