import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-20 pb-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,163,255,0.1)_0,transparent_70%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,163,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Tagline */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="mr-3 relative w-10 h-10">
                <Image 
                  src="/cronos-logo.svg" 
                  alt="CRO KILL BNB Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-2xl font-extrabold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text tracking-tight">
                CRO KILL BNB
              </div>
            </div>
            <p className="text-light-300 mb-6 max-w-xs">
              A community-driven initiative designed to spotlight Cronos chain and its potential. Power to the Cronos Community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/crokillsbnb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-200/70 border border-primary-500/20 flex items-center justify-center hover:bg-dark-300/70 hover:border-primary-500/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-400">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248c-.14.636-.42 2.178-.756 4.026-.42 2.458-.84 4.854-1.26 6.554-.14.636-.28 1.09-.42 1.272-.28.424-.56.636-.84.636-.42 0-.84-.212-1.26-.636-.7-.636-1.96-1.59-2.8-2.116-1.12-.742-1.82-1.272-2.1-1.59-.56-.53-.7-1.06-.14-1.59.14-.106 1.12-1.06 2.94-2.864 1.68-1.696 2.52-2.65 2.52-2.864 0-.106 0-.212-.14-.212-.14-.106-.28-.106-.42 0-.14.106-.98.636-2.52 1.696-2.38 1.59-3.64 2.438-3.78 2.544-.42.212-.84.318-1.26.318-.56 0-1.12-.106-1.68-.424-.7-.318-1.12-.53-1.26-.636-.7-.318-1.12-.742-1.26-1.166-.14-.53-.14-.954-.14-1.378 0-.53.14-.954.42-1.272.28-.424.7-.742 1.26-.954.56-.212 2.38-.742 5.32-1.59 2.8-.848 4.76-1.378 5.88-1.696.28-.106.56-.106.84-.106.56 0 .98.212 1.26.53.14.318.28.636.28.954v.212z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com/crokillsbnb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-200/70 border border-primary-500/20 flex items-center justify-center hover:bg-dark-300/70 hover:border-primary-500/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-400">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://discord.gg/crokillsbnb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-200/70 border border-primary-500/20 flex items-center justify-center hover:bg-dark-300/70 hover:border-primary-500/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-400">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.283a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.283.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-light">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#buy-token" 
                  className="text-light-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Buy Token
                </a>
              </li>
              <li>
                <a 
                  href="#token-info" 
                  className="text-light-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Token Information
                </a>
              </li>
              <li>
                <a 
                  href="#community" 
                  className="text-light-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="https://dexscreener.com/cronos/sample" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light-300 hover:text-primary-400 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Chart
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-light">Join the Revolution</h3>
            <p className="text-light-300 mb-4">
              Be part of a movement that's bringing power back to the Cronos ecosystem.
            </p>
            <div className="bg-dark-200/70 backdrop-blur-lg rounded-xl p-4 border border-primary-500/20">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm">Community-Owned</div>
                  <div className="text-light-300 text-xs">Contract renounced, LP burned</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-dark-300/50 text-center text-light-300 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© {currentYear} CRO KILL BNB. All rights reserved.</p>
          <p className="mt-2">
            This website is for informational purposes only. Nothing on this website should be interpreted as financial advice.
          </p>
          <p className="mt-4">
            <span className="opacity-80">Developed by </span>
            <a 
              href="https://kristoken.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              Kris Token
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
