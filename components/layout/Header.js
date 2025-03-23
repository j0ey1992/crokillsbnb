import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppKitAccount } from '@reown/appkit/react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          ? 'py-3 bg-dark-100/80 backdrop-blur-xl border-b border-primary-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="mr-3 relative w-8 h-8">
              <Image 
                src="/cronos-logo.svg" 
                alt="CRO KILL BNB Logo" 
                width={32} 
                height={32}
                className="object-contain"
              />
            </div>
            <div className="text-2xl font-extrabold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text tracking-tight">
              CRO KILL BNB
            </div>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a 
            href="#token-info"
            className="text-light-200 hover:text-primary-400 transition-colors relative group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Token Info</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          <motion.a 
            href="#community"
            className="text-light-200 hover:text-primary-400 transition-colors relative group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>Community</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <appkit-button />
          </motion.div>
          
          {isConnected && address && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-200/70 backdrop-blur-lg rounded-full py-2 px-4 border border-primary-500/30 text-sm font-medium flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
              {formatAddress(address)}
            </motion.div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-light p-2 bg-dark-200/50 backdrop-blur-lg rounded-lg border border-primary-500/20"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
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
            className="md:hidden bg-dark-100/95 backdrop-blur-xl border-b border-primary-500/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
              <a 
                href="#token-info"
                className="text-light-200 hover:text-primary-400 transition-colors py-2 border-b border-dark-300 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                Token Info
              </a>
              <a 
                href="#community"
                className="text-light-200 hover:text-primary-400 transition-colors py-2 border-b border-dark-300 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Community
              </a>
              
              <div className="py-2">
                <appkit-button />
              </div>
              
              {isConnected && address && (
                <div className="bg-dark-200/70 backdrop-blur-lg rounded-full py-2 px-4 border border-primary-500/30 text-sm font-medium self-start flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
                  {formatAddress(address)}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
