import { motion } from 'framer-motion';
import LogoAnimation from '../ui/LogoAnimation';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 15, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary-500/20 blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Grid pattern for cyberpunk feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.div
          className="inline-block mb-6 px-4 py-1 rounded-full bg-dark-200/70 border border-primary-500/30 text-primary-400 text-sm font-bold tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          COMMUNITY-DRIVEN REVOLUTION
        </motion.div>
        
        {/* Logo Animation */}
        <LogoAnimation />
        
        <motion.p 
          className="text-xl md:text-3xl mb-10 text-light-200 font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">Power to the Cronos Community</span>
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="transform hover:scale-105 transition-transform duration-300">
            <appkit-button />
          </div>
          
          <motion.a 
            href="#token-info" 
            className="px-8 py-3 rounded-full bg-dark-300/80 border border-primary-500/30 hover:bg-dark-200 hover:border-primary-500/50 transition-all duration-300 text-light font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(0, 163, 255, 0.3)' 
            }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </motion.div>
        
        {/* Security badges */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="bg-dark-200/50 backdrop-blur-lg rounded-full py-2 px-6 border border-primary-500/20 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary-500"></span>
            <span className="text-sm">LP Burned</span>
          </div>
          
          <div className="bg-dark-200/50 backdrop-blur-lg rounded-full py-2 px-6 border border-primary-500/20 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary-500"></span>
            <span className="text-sm">Contract Renounced</span>
          </div>
          
          <div className="bg-dark-200/50 backdrop-blur-lg rounded-full py-2 px-6 border border-primary-500/20 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary-500"></span>
            <span className="text-sm">0/0 Tax</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
