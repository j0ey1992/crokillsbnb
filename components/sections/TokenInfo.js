import { motion } from 'framer-motion';

export default function TokenInfo() {
  // Sample token data - in a real app, this would come from an API or blockchain
  const tokenData = {
    name: 'CRO KILL BNB',
    symbol: 'CKB',
    totalSupply: '1,000,000,000',
    burnedLP: '100%',
    tax: '0/0',
    contractRenounced: true,
    chartLink: 'https://dexscreener.com/cronos/sample', // Replace with actual chart link
  };

  return (
    <section id="token-info" className="py-20 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.1)_0,transparent_70%)]"></div>
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl"
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
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-dark-200/70 border border-primary-500/30 text-primary-400 text-sm font-bold tracking-wider">
            TOKENOMICS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
            Token Information
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Token Supply Card */}
          <motion.div 
            className="bg-dark-200/60 backdrop-blur-lg rounded-3xl p-8 border border-primary-500/20 shadow-soft hover:shadow-glow transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 0 25px rgba(0, 163, 255, 0.3)',
              borderColor: 'rgba(0, 163, 255, 0.4)'
            }}
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-primary-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary-400">Total Supply</h3>
            <p className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">{tokenData.totalSupply}</p>
            <p className="text-light-300 text-sm">{tokenData.symbol} tokens with deflationary mechanics</p>
          </motion.div>
          
          {/* Burned LP Card */}
          <motion.div 
            className="bg-dark-200/60 backdrop-blur-lg rounded-3xl p-8 border border-secondary-500/20 shadow-soft hover:shadow-glow-green transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 0 25px rgba(0, 255, 163, 0.3)',
              borderColor: 'rgba(0, 255, 163, 0.4)'
            }}
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-secondary-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-secondary-400">Burned LP</h3>
            <div className="relative h-5 bg-dark-300 rounded-full mb-4 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            <p className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">{tokenData.burnedLP}</p>
            <p className="text-light-300 text-sm">Liquidity permanently locked and burned</p>
          </motion.div>
          
          {/* Chart Link Card */}
          <motion.div 
            className="bg-dark-200/60 backdrop-blur-lg rounded-3xl p-8 border border-primary-500/20 shadow-soft hover:shadow-glow transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 0 25px rgba(0, 163, 255, 0.3)',
              borderColor: 'rgba(0, 163, 255, 0.4)'
            }}
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-primary-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary-400">Live Chart</h3>
            <p className="text-light-300 text-sm mb-6">Track real-time price action and market data</p>
            <motion.a 
              href={tokenData.chartLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full py-4 px-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-center font-bold hover:opacity-90 transition-all"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 15px rgba(0, 163, 255, 0.5)' 
              }}
              whileTap={{ scale: 0.98 }}
            >
              View Chart
            </motion.a>
          </motion.div>
        </div>
        
        {/* Contract Info */}
        <motion.div 
          className="mt-16 p-8 bg-dark-200/60 backdrop-blur-lg rounded-3xl border border-primary-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary-400">Contract Security</h3>
              <p className="text-light-300">Fully audited and secured for community trust</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-full py-3 px-6 border border-primary-500/30 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-secondary-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-dark-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">LP Burned</span>
              </div>
              
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-full py-3 px-6 border border-primary-500/30 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-secondary-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-dark-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">Contract Renounced</span>
              </div>
              
              <div className="bg-dark-300/80 backdrop-blur-lg rounded-full py-3 px-6 border border-primary-500/30 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-secondary-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-dark-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-medium">0/0 Tax</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
