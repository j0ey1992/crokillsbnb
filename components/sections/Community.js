import { motion } from 'framer-motion';

export default function Community() {
  const communityLinks = [
    {
      name: 'Telegram',
      description: 'Join our active Telegram community for real-time updates and discussions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248c-.14.636-.42 2.178-.756 4.026-.42 2.458-.84 4.854-1.26 6.554-.14.636-.28 1.09-.42 1.272-.28.424-.56.636-.84.636-.42 0-.84-.212-1.26-.636-.7-.636-1.96-1.59-2.8-2.116-1.12-.742-1.82-1.272-2.1-1.59-.56-.53-.7-1.06-.14-1.59.14-.106 1.12-1.06 2.94-2.864 1.68-1.696 2.52-2.65 2.52-2.864 0-.106 0-.212-.14-.212-.14-.106-.28-.106-.42 0-.14.106-.98.636-2.52 1.696-2.38 1.59-3.64 2.438-3.78 2.544-.42.212-.84.318-1.26.318-.56 0-1.12-.106-1.68-.424-.7-.318-1.12-.53-1.26-.636-.7-.318-1.12-.742-1.26-1.166-.14-.53-.14-.954-.14-1.378 0-.53.14-.954.42-1.272.28-.424.7-.742 1.26-.954.56-.212 2.38-.742 5.32-1.59 2.8-.848 4.76-1.378 5.88-1.696.28-.106.56-.106.84-.106.56 0 .98.212 1.26.53.14.318.28.636.28.954v.212z" />
        </svg>
      ),
      url: 'https://t.me/crokillsbnb',
      color: 'from-blue-500 to-blue-600',
      members: '15,000+',
    },
    {
      name: 'Twitter',
      description: 'Follow us on Twitter for announcements and community engagement',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://twitter.com/crokillsbnb',
      color: 'from-primary-500 to-secondary-500',
      members: '8,500+',
    },
    {
      name: 'Discord',
      description: 'Join our Discord server for deeper community discussions and support',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.283a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.283.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
        </svg>
      ),
      url: 'https://discord.gg/crokillsbnb',
      color: 'from-secondary-500 to-secondary-600',
      members: '5,200+',
    },
  ];

  return (
    <section id="community" className="py-20 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(138,43,226,0.1)_0,transparent_70%)]"></div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Cyber lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-secondary-500 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary-500 to-transparent"></div>
        </div>
        
        {/* Floating Cronos logos */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.02 + Math.random() * 0.03,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10, 0],
                rotate: [0, Math.random() * 10 - 5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            >
              <svg width="35" height="40" viewBox="0 0 120.1 138.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.1,0L0,34.7v69.4l60.1,34.7l60-34.7V34.7L60.1,0z M102.3,93.8l-42.3,24.4L17.8,93.8V45l42.3-24.4L102.3,45V93.8z" fill="url(#community-logo-gradient-1)" />
                <path d="M60.1,138.8l60-34.7V34.7L60.1,0v20.6L102.3,45v48.9l-42.3,24.4V138.8z" fill="url(#community-logo-gradient-2)" />
                <path d="M60,0L0,34.7v69.4l60,34.7v-20.6L17.8,93.8V44.9L60,20.6V0z" fill="url(#community-logo-gradient-3)" />
                <path d="M88.1,85.6l-28,16.2L32,85.6V53.2L60.1,37l28,16.2L76.4,60l-16.4-9.5L43.7,60v18.9l16.4,9.5l16.4-9.5L88.1,85.6z" fill="url(#community-logo-gradient-4)" />
                <defs>
                  <linearGradient id="community-logo-gradient-1" x1="0" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                  <linearGradient id="community-logo-gradient-2" x1="60.1" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                  <linearGradient id="community-logo-gradient-3" x1="0" y1="0" x2="60" y2="138.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                  <linearGradient id="community-logo-gradient-4" x1="32" y1="37" x2="88.1" y2="101.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-dark-200/70 border border-secondary-500/30 text-secondary-400 text-sm font-bold tracking-wider">
            JOIN THE MOVEMENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
            Community Power
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-dark-200/60 backdrop-blur-lg rounded-3xl border border-primary-500/20 overflow-hidden shadow-soft"
            >
              {/* Card header with gradient */}
              <div className={`h-3 w-full bg-gradient-to-r ${link.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center`}>
                    {link.icon}
                  </div>
                  <div className="bg-dark-300/80 backdrop-blur-lg rounded-full py-1 px-3 border border-primary-500/30 text-xs font-medium">
                    {link.members} members
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{link.name}</h3>
                <p className="text-light-300 text-sm mb-6">{link.description}</p>
                
                <motion.a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 px-6 bg-dark-300/80 border border-primary-500/30 rounded-xl text-center font-medium hover:bg-dark-200 hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 0 15px rgba(0, 163, 255, 0.3)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join {link.name}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Community manifesto */}
        <motion.div 
          className="mt-20 p-8 bg-dark-200/60 backdrop-blur-lg rounded-3xl border border-primary-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">Community Manifesto</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"></div>
              <p className="text-light-300 mb-4">
                Join the CRO KILL BNB revolution and be part of a movement that's bringing power back to the Cronos ecosystem.
              </p>
              <p className="text-light-300">
                Together, we're building a decentralized future where community comes first.
              </p>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-2xl p-5 border border-primary-500/20">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Community-Driven</h4>
                <p className="text-light-300 text-sm">All decisions are made by the community, for the community.</p>
              </div>
              
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-2xl p-5 border border-primary-500/20">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Fully Secure</h4>
                <p className="text-light-300 text-sm">Contract renounced, LP burned, and 0/0 tax for maximum security.</p>
              </div>
              
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-2xl p-5 border border-primary-500/20">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Open Source</h4>
                <p className="text-light-300 text-sm">All code is open source and transparent for community review.</p>
              </div>
              
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-2xl p-5 border border-primary-500/20">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Growing Fast</h4>
                <p className="text-light-300 text-sm">Join thousands of community members supporting the movement.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
