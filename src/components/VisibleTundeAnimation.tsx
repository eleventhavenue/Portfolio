import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VisibleTundeAnimation = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const letters = ['T', 'U', 'N', 'D', 'E'];

  return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden relative z-10">
      {/* Welcome Text */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-serif mb-8 dark:text-white/90 text-light-text/90"
      >
        Hi, I'm
      </motion.p>

      <div 
        className="relative w-full max-w-4xl flex flex-col items-center"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center gap-4">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`
                relative text-7xl md:text-8xl font-bold transition-all duration-500
                ${isHovered ? 'text-cyan-400' : 'dark:text-white text-light-text'}
                hover:scale-110 hover:text-pink-500
                animate-bounce-slow
              `}
              style={{
                animationDelay: `${index * 0.2}s`,
                textShadow: isHovered ? 
                  '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)' : 
                  'none'
              }}
            >
              {letter}

              {isHovered && (
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    animation: 'spin 4s linear infinite',
                    transformOrigin: 'center'
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${i * 60}deg) translateY(-40px)`,
                        filter: 'blur(2px)',
                        opacity: 0.6,
                        animation: `pulse 2s infinite ${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              )}

              <div
                className="absolute inset-0 text-cyan-400 opacity-50"
                style={{
                  transform: 'translate(4px, 4px)',
                  filter: 'blur(4px)',
                  animation: 'echo 2s infinite alternate'
                }}
              >
                {letter}
              </div>
            </div>
          ))}
        </div>

        {/* Last Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-3xl md:text-4xl font-serif mt-8 dark:text-white/90 text-light-text/90"
        >
          Ogunremi
        </motion.p>
      </div>
    </div>
  );
};

export default VisibleTundeAnimation;