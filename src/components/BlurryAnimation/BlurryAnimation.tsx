import React from 'react';

const BlurryAnimation = () => {
  // !!Make sure the parent component is relative
  return (
    <>
      <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-purple-300 rounded-full filter blur-md opacity-10 animate-blob z-0"></div>
      <div className="absolute top-0 -right-4 w-[400px] h-[400px] bg-blue-300 rounded-full filter blur-md opacity-10 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-8 left-20 w-[400px] h-[400px] bg-pink-300 rounded-full filter blur-md opacity-10 animate-blob animation-delay-4000 z-0"></div>
    </>
  );
};

export default BlurryAnimation;
