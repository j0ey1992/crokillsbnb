import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppKitAccount } from '@reown/appkit/react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { isConnected, address } = useAppKitAccount();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format address for display
  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-primary-900/85 backdrop-blur-xl border-b border-primary-500/20 shadow-[0_4px_30px_rgba(0,163,255,0.3)]' 
          : 'py-8 bg-transparent'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary-500/10 blur-[80px]"
          animate={{ 
            x: [0, 20, 0], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-secondary-500/10 blur-[100px]"
          animate={{ 
            x: [0, -20, 0], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,20 Q400,0 800,20 T1600,20" 
            stroke="url(#header-gradient)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.5, 1]
            }}
          />
          <defs>
            <linearGradient id="header-gradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#00a3ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00a3ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8a2be2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center group"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <motion.div 
              className="mr-4 relative w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary-500/20"
                animate={{ 
                  scale: isHovering ? [1, 1.2, 1] : 1,
                  opacity: isHovering ? [0.2, 0.4, 0.2] : 0.2
                }}
                transition={{ duration: 1.5, repeat: isHovering ? Infinity : 0 }}
              />
              <Image 
                src="/cronos-logo.svg" 
                alt="CRO KILL BNB Logo" 
                width={40} 
                height={40}
                className="object-contain drop-shadow-[0_0_12px_rgba(0,163,255,0.7)]"
              />
            </motion.div>
            <div className="relative">
              <motion.div 
                className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary-300 via-primary-400 to-secondary-400 text-transparent bg-clip-text tracking-tight"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                CRO KILL BNB
              </motion.div>
              <motion.div 
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary-500/0 via-primary-500/80 to-secondary-500/0"
                initial={{ width: 0 }}
                animate={{ 
                  width: isHovering ? "100%" : "0%",
                  opacity: isHovering ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <motion.a 
            href="#token-info"
            className="text-light hover:text-primary-300 transition-colors relative group text-base"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
          >
            <span className="relative z-10">Token Info</span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="absolute -inset-2 rounded-lg bg-primary-500/10 z-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a 
            href="#community"
            className="text-light hover:text-primary-300 transition-colors relative group text-base"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >
            <span className="relative z-10">Community</span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="absolute -inset-2 rounded-lg bg-primary-500/10 z-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-2 rounded-full bg-primary-500/10 z-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <appkit-button />
            </div>
          </motion.div>
          
          {isConnected && address && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-primary-800/70 backdrop-blur-lg rounded-full py-2 px-5 border border-primary-400/40 text-sm font-medium flex items-center gap-2 shadow-glow relative overflow-hidden"
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
              <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
              {formatAddress(address)}
            </motion.div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-light p-2.5 bg-primary-800/60 backdrop-blur-lg rounded-lg border border-primary-400/40 shadow-glow relative overflow-hidden"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-900/95 backdrop-blur-xl border-b border-primary-500/20 relative overflow-hidden"
          >
            {/* Mobile menu background effects */}
            <motion.div 
              className="absolute top-20 -right-20 w-60 h-60 rounded-full bg-primary-500/5 blur-[80px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-7 relative z-10">
              <motion.a 
                href="#token-info"
                className="text-light hover:text-primary-300 transition-colors py-3 border-b border-primary-800/50 flex items-center relative overflow-hidden group"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary-500/10 -z-10"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="mr-3 bg-primary-800/80 p-1.5 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </motion.div>
                Token Info
              </motion.a>
              <motion.a 
                href="#community"
                className="text-light hover:text-primary-300 transition-colors py-3 border-b border-primary-800/50 flex items-center relative overflow-hidden group"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-primary-500/10 -z-10"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="mr-3 bg-primary-800/80 p-1.5 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </motion.div>
                Community
              </motion.a>
              
              <motion.div 
                className="py-3"
                whileHover={{ scale: 1.03, x: 5 }}
              >
                <appkit-button />
              </motion.div>
              
              {isConnected && address && (
                <motion.div 
                  className="bg-primary-800/70 backdrop-blur-lg rounded-full py-2.5 px-5 border border-primary-400/40 text-sm font-medium self-start flex items-center gap-2 shadow-glow relative overflow-hidden"
                  whileHover={{ scale: 1.05, x: 5 }}
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
                  <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
                  {formatAddress(address)}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
