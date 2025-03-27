import { motion } from 'framer-motion';
import LogoAnimation from '../ui/LogoAnimation';
import { useEffect, useState } from 'react';

export default function Hero() {
  // State to track if we're on the client side
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full bg-primary-500/25 blur-[120px]"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[700px] h-[700px] rounded-full bg-secondary-500/20 blur-[140px]"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Additional blue glow */}
        <motion.div 
          className="absolute top-40 right-40 w-[500px] h-[500px] rounded-full bg-primary-400/20 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        {/* Static particles instead of random animated ones */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => {
            // Use deterministic positions based on index instead of random
            const top = (i * 3.33) % 100;
            const left = ((i * 7) + 5) % 100;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary-400/80"
                style={{
                  top: `${top}%`,
                  left: `${left}%`
                }}
                animate={{
                  y: [0, (i % 5) * 10 - 20],
                  x: [0, (i % 3) * 15 - 15],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 5 + (i % 5) * 2,
                  repeat: Infinity,
                  delay: (i % 7) * 0.5
                }}
              />
            );
          })}
        </div>
        
        {/* Center glow for animation area */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,163,255,0.12) 0%, rgba(138,43,226,0.08) 30%, transparent 70%)",
          }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            scale: [0.9, 1, 0.9]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Enhanced grid pattern with animation */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,163,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,200 Q400,100 800,200 T1600,200" 
            stroke="url(#hero-line-gradient)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.2, 0.1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.5, 1]
            }}
          />
          <motion.path 
            d="M0,400 Q600,300 1200,400 T2400,400" 
            stroke="url(#hero-line-gradient)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.15, 0.05]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.5, 1],
              delay: 1
            }}
          />
          <defs>
            <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#00a3ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00a3ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8a2be2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating Cronos logos with deterministic positions */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => {
            // Use deterministic positions based on index
            const top = (i * 6.5) % 100;
            const left = ((i * 6) + 10) % 100;
            const opacityBase = 0.03;
            const opacityVariation = (i % 7) * 0.01;
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: opacityBase + opacityVariation
                }}
                animate={{
                  y: [0, (i % 3) * 10 - 10, 0],
                  rotate: [0, (i % 2 === 0 ? 10 : -10), 0],
                  scale: [1, 1 + (i % 5) * 0.04, 1]
                }}
                transition={{
                  duration: 5 + (i % 5) * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: (i % 5) * 1
                }}
              >
                <svg width="60" height="70" viewBox="0 0 120.1 138.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.1,0L0,34.7v69.4l60.1,34.7l60-34.7V34.7L60.1,0z M102.3,93.8l-42.3,24.4L17.8,93.8V45l42.3-24.4L102.3,45V93.8z" fill="url(#hero-logo-gradient-1)" />
                  <path d="M60.1,138.8l60-34.7V34.7L60.1,0v20.6L102.3,45v48.9l-42.3,24.4V138.8z" fill="url(#hero-logo-gradient-2)" />
                  <path d="M60,0L0,34.7v69.4l60,34.7v-20.6L17.8,93.8V44.9L60,20.6V0z" fill="url(#hero-logo-gradient-3)" />
                  <path d="M88.1,85.6l-28,16.2L32,85.6V53.2L60.1,37l28,16.2L76.4,60l-16.4-9.5L43.7,60v18.9l16.4,9.5l16.4-9.5L88.1,85.6z" fill="url(#hero-logo-gradient-4)" />
                  <defs>
                    <linearGradient id="hero-logo-gradient-1" x1="0" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                    <linearGradient id="hero-logo-gradient-2" x1="60.1" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                    <linearGradient id="hero-logo-gradient-3" x1="0" y1="0" x2="60" y2="138.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                    <linearGradient id="hero-logo-gradient-4" x1="32" y1="37" x2="88.1" y2="101.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <motion.div
          className="inline-block mb-8 px-6 py-1.5 rounded-full bg-primary-900/70 border border-primary-400/40 text-primary-300 text-sm font-bold tracking-wider shadow-glow relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0"
            animate={{ 
              x: ['-100%', '200%'],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          COMMUNITY-DRIVEN REVOLUTION
        </motion.div>
        
        {/* Logo Animation */}
        <LogoAnimation />
        
        <motion.div 
          className="text-xl md:text-3xl lg:text-4xl mb-12 text-light font-bold tracking-tight relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-primary-300 via-primary-400 to-secondary-400 text-transparent bg-clip-text inline-block"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Power to the Cronos Community
          </motion.span>
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-[2px] bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 w-3/4"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              width: ['60%', '80%', '60%']
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="absolute -inset-3 rounded-full bg-primary-500/10 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="relative z-10">
              {/* Only render appkit-button on the client side */}
              {isClient ? (
                <appkit-button />
              ) : (
                <div className="px-10 py-3.5 rounded-full bg-secondary-600/90 border border-secondary-400/40 text-light font-medium shadow-glow">
                  Connect Wallet
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.a 
            href="#token-info" 
            className="px-10 py-3.5 rounded-full bg-primary-800/80 border border-primary-400/40 hover:bg-primary-700/80 hover:border-primary-400/60 transition-all duration-300 text-light font-medium shadow-glow relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(0, 163, 255, 0.4)' 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0"
              animate={{ 
                x: ['-100%', '200%'],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <span className="relative z-10">Learn More</span>
          </motion.a>
        </motion.div>
        
        {/* Security badges */}
        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="bg-primary-800/60 backdrop-blur-lg rounded-full py-2.5 px-7 border border-primary-400/40 flex items-center gap-3 shadow-glow relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0"
              animate={{ 
                x: ['-100%', '200%'],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <motion.span 
              className="w-3 h-3 rounded-full bg-secondary-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <span className="text-sm font-medium relative z-10">LP Burned</span>
          </motion.div>
          
          <motion.div 
            className="bg-primary-800/60 backdrop-blur-lg rounded-full py-2.5 px-7 border border-primary-400/40 flex items-center gap-3 shadow-glow relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0"
              animate={{ 
                x: ['-100%', '200%'],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 0.3
              }}
            />
            <motion.span 
              className="w-3 h-3 rounded-full bg-secondary-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3
              }}
            />
            <span className="text-sm font-medium relative z-10">Contract Renounced</span>
          </motion.div>
          
          <motion.div 
            className="bg-primary-800/60 backdrop-blur-lg rounded-full py-2.5 px-7 border border-primary-400/40 flex items-center gap-3 shadow-glow relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0"
              animate={{ 
                x: ['-100%', '200%'],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 0.6
              }}
            />
            <motion.span 
              className="w-3 h-3 rounded-full bg-secondary-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.6
              }}
            />
            <span className="text-sm font-medium relative z-10">0/0 Tax</span>
          </motion.div>
        </motion.div>
        
        {/* Fixed position floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 pointer-events-none">
          <motion.div
            className="w-full h-full rounded-full border border-primary-500/30 flex items-center justify-center"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <motion.div
              className="w-1/2 h-1/2 rounded-full bg-primary-500/20"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
        
        <div className="absolute bottom-1/4 right-10 w-16 h-16 pointer-events-none">
          <motion.div
            className="w-full h-full rounded-md border border-secondary-500/30 flex items-center justify-center rotate-45"
            animate={{
              y: [0, 15, 0],
              rotate: [45, 55, 45],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          >
            <motion.div
              className="w-1/2 h-1/2 rounded-sm bg-secondary-500/20"
              animate={{
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
