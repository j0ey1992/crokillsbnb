import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoAnimation() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [fightStage, setFightStage] = useState(0);
  
  // Start animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);
    
    // Progress through fight stages
    if (animationStarted) {
      const stageTimer = setTimeout(() => {
        setFightStage(1); // Start fighting
        
        setTimeout(() => {
          setFightStage(2); // Attack phase
          
          setTimeout(() => {
            setFightStage(3); // Final blow
            
            setTimeout(() => {
              setFightStage(4); // Victory
              setAnimationComplete(true);
            }, 1500);
          }, 1500);
        }, 2000);
      }, 1500);
      
      return () => {
        clearTimeout(stageTimer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [animationStarted]);
  
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 mx-auto">
      {/* Battle arena background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div 
          className="w-full h-full absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(30,41,59,0.8) 0%, rgba(15,23,42,1) 100%)",
            boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)"
          }}
          animate={{ 
            opacity: animationStarted ? [0, 1] : 0,
          }}
          transition={{ duration: 1 }}
        />
        
        <motion.div 
          className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, rgba(79,70,229,0) 70%)",
            filter: "blur(8px)"
          }}
          animate={{ 
            scale: animationStarted ? [1, 1.5, 0.8, fightStage >= 3 ? 2 : 1] : 1,
            opacity: animationStarted ? [0.3, 0.8, 0.5, fightStage >= 3 ? 0.8 : 0.5] : 0.3
          }}
          transition={{ 
            duration: 4, 
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Battle ground */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-md h-2 bg-gray-700 rounded-full overflow-hidden"
        animate={{
          scaleX: animationStarted ? [0, 1] : 0,
          opacity: animationStarted ? [0, 1] : 0
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
          animate={{
            scaleX: fightStage >= 3 ? [0, 1] : 0,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
      
      {/* BNB Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        initial={{ x: 100, rotate: 0, opacity: 0 }}
        animate={{ 
          x: animationStarted 
            ? fightStage === 0 ? [100, 50] 
            : fightStage === 1 ? [50, 50, 70, 50] 
            : fightStage === 2 ? [50, 70, 50, 70] 
            : fightStage === 3 ? [70, 100, 150] 
            : [150, 200]
            : 100,
          y: animationStarted 
            ? fightStage === 0 ? [0, 0] 
            : fightStage === 1 ? [0, -20, 0, -10] 
            : fightStage === 2 ? [-10, 0, -20, 0] 
            : fightStage === 3 ? [0, 50, 100] 
            : [100, 150]
            : 0,
          rotate: animationStarted 
            ? fightStage === 0 ? [0, 0] 
            : fightStage === 1 ? [0, 5, -5, 0] 
            : fightStage === 2 ? [0, -10, 5, -5] 
            : fightStage === 3 ? [-5, 45, 90] 
            : [90, 180]
            : 0,
          opacity: animationStarted 
            ? fightStage === 0 ? [0, 1] 
            : fightStage === 1 ? [1, 1] 
            : fightStage === 2 ? [1, 1] 
            : fightStage === 3 ? [1, 0.7, 0.4] 
            : [0.4, 0]
            : 0,
          scale: animationStarted 
            ? fightStage === 0 ? [1, 1] 
            : fightStage === 1 ? [1, 1.1, 0.9, 1] 
            : fightStage === 2 ? [1, 0.9, 1.1, 0.9] 
            : fightStage === 3 ? [0.9, 0.7, 0.5] 
            : [0.5, 0.2]
            : 1,
        }}
        transition={{ 
          duration: fightStage === 0 ? 1 : fightStage === 1 ? 2 : fightStage === 2 ? 1.5 : fightStage === 3 ? 1 : 0.8,
          times: fightStage === 0 ? [0, 1] : fightStage === 1 ? [0, 0.3, 0.7, 1] : fightStage === 2 ? [0, 0.3, 0.7, 1] : fightStage === 3 ? [0, 0.5, 1] : [0, 1],
          ease: fightStage >= 3 ? "backIn" : "easeInOut"
        }}
      >
        <Image 
          src="/bnb-bnb-logo.svg" 
          alt="BNB Logo" 
          width={200} 
          height={200}
          className="w-full h-full object-contain"
        />
        
        {/* Cracks effect */}
        {fightStage >= 2 && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-full h-0.5 bg-blue-500"
              initial={{ width: 0, rotate: 45 }}
              animate={{ 
                width: ['0%', '80%', '80%'],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 0.4, 
                delay: fightStage === 2 ? 0.2 : 0,
                times: [0, 0.8, 1]
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/3 w-full h-0.5 bg-blue-500"
              initial={{ width: 0, rotate: -30 }}
              animate={{ 
                width: ['0%', '70%', '70%'],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 0.3, 
                delay: fightStage === 2 ? 0.4 : 0.1,
                times: [0, 0.8, 1]
              }}
            />
            <motion.div 
              className="absolute top-2/3 left-1/4 w-full h-0.5 bg-blue-500"
              initial={{ width: 0, rotate: 60 }}
              animate={{ 
                width: ['0%', '60%', '60%'],
                opacity: [0, 1, 1]
              }}
              transition={{ 
                duration: 0.3, 
                delay: fightStage === 2 ? 0.5 : 0.2,
                times: [0, 0.8, 1]
              }}
            />
          </>
        )}
        
        {/* Shatter pieces */}
        {fightStage >= 3 && (
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const distance = 30 + Math.random() * 50;
              const size = 5 + Math.random() * 15;
              const delay = Math.random() * 0.2;
              
              return (
                <motion.div
                  key={i}
                  className="absolute bg-yellow-400 rounded-md opacity-80"
                  style={{ 
                    width: size, 
                    height: size,
                    top: '50%',
                    left: '50%',
                    marginTop: -size/2,
                    marginLeft: -size/2,
                  }}
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                  animate={{ 
                    x: [0, Math.cos(angle) * distance, Math.cos(angle) * distance * 2],
                    y: [0, Math.sin(angle) * distance, Math.sin(angle) * distance * 2 + 50],
                    rotate: [0, i % 2 ? 90 : -90, i % 2 ? 180 : -180],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: delay,
                    ease: "easeOut"
                  }}
                />
              );
            })}
          </div>
        )}
      </motion.div>
      
      {/* Cronos Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-10"
        initial={{ x: -100, rotate: 0, opacity: 0 }}
        animate={{ 
          x: animationStarted 
            ? fightStage === 0 ? [-100, -50] 
            : fightStage === 1 ? [-50, -50, -70, -50] 
            : fightStage === 2 ? [-50, -70, -50, -30] 
            : fightStage === 3 ? [-30, 0, 0] 
            : [0, 0]
            : -100,
          y: animationStarted 
            ? fightStage === 0 ? [0, 0] 
            : fightStage === 1 ? [0, -20, 0, -10] 
            : fightStage === 2 ? [-10, 0, -20, -10] 
            : fightStage === 3 ? [-10, 0, 0] 
            : [0, 0]
            : 0,
          rotate: animationStarted 
            ? fightStage === 0 ? [0, 0] 
            : fightStage === 1 ? [0, -5, 5, 0] 
            : fightStage === 2 ? [0, 10, -5, 0] 
            : fightStage === 3 ? [0, -10, 0] 
            : [0, 0]
            : 0,
          opacity: animationStarted ? [0, 1] : 0,
          scale: animationStarted 
            ? fightStage === 0 ? [1, 1] 
            : fightStage === 1 ? [1, 1.1, 0.9, 1] 
            : fightStage === 2 ? [1, 0.9, 1.1, 1.2] 
            : fightStage === 3 ? [1.2, 1.4, 1.2] 
            : [1.2, 1.1]
            : 1,
        }}
        transition={{ 
          duration: fightStage === 0 ? 1 : fightStage === 1 ? 2 : fightStage === 2 ? 1.5 : fightStage === 3 ? 1 : 0.8,
          times: fightStage === 0 ? [0, 1] : fightStage === 1 ? [0, 0.3, 0.7, 1] : fightStage === 2 ? [0, 0.3, 0.7, 1] : fightStage === 3 ? [0, 0.5, 1] : [0, 1],
          ease: "easeInOut"
        }}
      >
        <Image 
          src="/cronos-cro-logo.svg" 
          alt="Cronos Logo" 
          width={200} 
          height={200}
          className="w-full h-full object-contain"
        />
        
        {/* Power aura */}
        {fightStage >= 2 && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(79,70,229,0) 70%)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.8, 0.4],
              scale: [0.8, 1.5, 1.2]
            }}
            transition={{ 
              duration: 1.5,
              times: [0, 0.6, 1],
              ease: "easeOut",
              repeat: fightStage === 2 ? 1 : 0,
              repeatType: "reverse"
            }}
          />
        )}
      </motion.div>
      
      {/* Attack effects */}
      {fightStage >= 2 && (
        <>
          {/* Slash effect */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ 
              opacity: [0, 1, 0],
              rotate: [-45, 45, 135],
              scale: [0.5, 1.5, 0.8],
              x: [-20, 50, 100]
            }}
            transition={{ 
              duration: 0.8,
              times: [0, 0.3, 1],
              ease: "easeOut",
              delay: fightStage === 2 ? 0.7 : 0
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M10,60 L110,60" 
                stroke="url(#slash-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ 
                  duration: 0.8,
                  times: [0, 0.3, 1],
                  ease: "easeOut"
                }}
              />
              <defs>
                <linearGradient id="slash-gradient" x1="10" y1="60" x2="110" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#4F46E5" stopOpacity="0"/>
                  <stop offset="0.5" stopColor="#4F46E5"/>
                  <stop offset="1" stopColor="#4F46E5" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          {/* Energy blast */}
          {fightStage >= 3 && (
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.2, 1.5, 2]
              }}
              transition={{ 
                duration: 1,
                times: [0, 0.3, 1],
                ease: "easeOut"
              }}
            >
              <div className="w-40 h-40 rounded-full bg-indigo-500/30 blur-md" />
              <div className="absolute inset-0 w-20 h-20 m-auto rounded-full bg-indigo-600/50 blur-sm" />
            </motion.div>
          )}
        </>
      )}
      
      {/* Lightning effect */}
      {fightStage >= 3 && (
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M100 20L120 80H150L110 110L130 180L80 130L40 170L60 110L20 80H80L100 20Z" 
              fill="url(#lightning-gradient)"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="lightning-gradient" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#002D74"/>
                <stop offset="1" stopColor="#4F46E5"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
      
      {/* Text animation */}
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: animationStarted ? [0, 0, 0, 1] : 0,
          y: animationStarted ? [20, 20, 20, 0] : 20
        }}
        transition={{ 
          duration: 3,
          times: [0, 0.6, 0.7, 1],
          ease: "easeOut"
        }}
      >
        <motion.div
          className="relative"
          animate={{ 
            scale: fightStage >= 3 ? [1, 1.05, 1] : 1
          }}
          transition={{ 
            duration: 1.5,
            times: [0, 0.5, 1],
            repeat: fightStage >= 3 ? Infinity : 0,
            repeatType: "reverse"
          }}
        >
          {/* Shadow layer for glow effect */}
          {fightStage >= 3 && (
            <div 
              className="absolute inset-0 text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-primary-500/30 blur-[2px] scale-105"
              style={{ transform: 'translateZ(0)' }}
            >
              CRO KILLS BNB
            </div>
          )}
          
          {/* Main text with crisp rendering */}
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white"
            style={{ transform: 'translateZ(0)', WebkitFontSmoothing: 'antialiased' }}
          >
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-400 text-transparent bg-clip-text">
              CRO KILLS BNB
            </span>
          </h2>
        </motion.div>
      </motion.div>
      
      {/* Explosion particles */}
      {fightStage >= 3 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(30)].map((_, i) => {
            const angle = (i / 30) * Math.PI * 2;
            const distance = Math.random() * 150 + 50;
            const size = Math.random() * 6 + 2;
            const delay = Math.random() * 0.3;
            const duration = Math.random() * 1 + 1;
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{ 
                  width: size, 
                  height: size,
                  top: 0,
                  left: 0,
                  background: i % 3 === 0 ? '#F0B90B' : i % 3 === 1 ? '#4F46E5' : '#002D74'
                }}
                initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: [0, Math.cos(angle) * distance],
                  y: [0, Math.sin(angle) * distance],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: duration,
                  delay: delay,
                  ease: "easeOut"
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
