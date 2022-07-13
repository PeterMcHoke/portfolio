import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../shared/animation';
import GameTheoryLogo from '../../../public/assets/GT_Logo.png';
import QuickTakeLogo from '../../../public/assets/QuickTake_Logo.png';
import { Button } from '@chakra-ui/react';

interface ShowcaseProps {
  title: string;
  id?: string;
}

const mockData = [
  {
    id: '1',
    title: 'QuickTake',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    descriptionLong:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colors: {
      background: 'bg-[#eaeaf0]',
      text: 'text-[#1a1a1a]',
      primary: 'bg-[#216fed]',
    },
    logo: '/assets/QuickTake_Logo.png',
    url: 'https://www.quicktake.io/',
    preview: '/assets/QuickTake_Preview.png',
  },
  {
    id: '2',
    title: 'GameTheory',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    descriptionLong:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    colors: {
      background: 'bg-[#1b1b1b]',
      text: 'text-[#ffffff]',
      primary: 'bg-[#ffb40d]',
    },
    logo: '/assets/GT_Logo.png',
    url: 'https://www.gametheory.fans/',
    preview: '/assets/GameTheory_Preview.png',
  },
];

export default function Showcase({ title, id }: ShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeShowcase, setActiveShowcase] = useState<any>(null);

  //Parse the id from the data and minus 1 to get the index
  useEffect(() => {
    if (selectedId) {
      setActiveShowcase(mockData[parseInt(selectedId) - 1]);
      console.log(activeShowcase);
    }
  }, [selectedId]);

  return (
    <section className="container mx-auto px-32 pb-80" id={title}>
      <div className="flex flex-col gap-y-6">
        <h2 className="font-serif text-[80px]">{title}</h2>
        <div className="flex gap-x-6">
          {mockData.map((item, index) => (
            <motion.div
              layoutId={item.id}
              onClick={() => {
                setSelectedId(item.id);
              }}
              key={index}
              className={`${item.colors.background} ${item.colors.text} rounded-2xl shadow-lg px-8 pt-10 pb-20 cursor-pointer`}
            >
              <motion.img
                src={item.logo}
                alt={item.title}
                className="h-10 mb-8"
              />
              <motion.p className="mb-6">{item.description}</motion.p>
              <motion.img src={item.preview} className="w-4/5 mx-auto" />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed w-screen h-screen top-0 left-0 bg-black/40"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex justify-center items-center w-full h-full">
                <motion.div
                  layoutId={selectedId}
                  className={`${activeShowcase?.colors.background} ${activeShowcase?.colors.text} rounded-lg shadow-xl p-12 relative w-2/4 `}
                >
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="font-bold py-2 px-4 hover:bg-gray-300 rounded-md absolute top-4 right-4"
                  >
                    X
                  </motion.button>
                  <motion.img
                    src={activeShowcase?.logo}
                    alt={activeShowcase?.title}
                    className="h-10 my-4 "
                  />
                  <motion.p className="my-10">
                    {activeShowcase?.descriptionLong}
                  </motion.p>
                  <motion.img
                    src={activeShowcase?.preview}
                    className="w-4/5 mx-auto my-8"
                  />
                  <a href={activeShowcase?.url}>
                    <motion.button
                      className={`${activeShowcase?.colors.primary} text-white rounded-lg py-2 w-full font-medium  `}
                      whileTap={{ scale: 0.95 }}
                    >
                      Check out the project
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
