import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BuyToken() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x59795CdA23903315B7A9e6a3eDB775e53EF96706";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="buy-token" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100/0 via-primary-500/5 to-dark-100/0"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-500/20"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              How to Buy
            </span>
          </h2>
          <p className="text-xl text-light-200/80 max-w-2xl mx-auto">
            Join the revolution and be part of the Cronos ecosystem's future
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contract Address */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-100/50 backdrop-blur-lg rounded-2xl p-6 border border-primary-500/20 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Contract Address</h3>
            </div>
            
            <div className="mt-4 mb-6">
              <div className="bg-dark-200/70 rounded-xl p-4 flex items-center justify-between break-all">
                <div className="text-light-300 text-sm md:text-base font-mono">
                  {contractAddress}
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="ml-2 flex-shrink-0 p-2 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                >
                  {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-sm text-light-300/70 mt-2">
                Click to copy the contract address to your clipboard
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">1</span>
                </div>
                <p className="text-light-200">
                  Add the Cronos network to your wallet if you haven't already
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">2</span>
                </div>
                <p className="text-light-200">
                  Copy the contract address and import the token to your wallet
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">3</span>
                </div>
                <p className="text-light-200">
                  Use a DEX like VVS Finance to swap CRO for CRO KILL BNB
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Buy on VVS Finance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-100/50 backdrop-blur-lg rounded-2xl p-6 border border-primary-500/20 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Buy on VVS Finance</h3>
            </div>
            
            <div className="flex items-center justify-center my-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <div className="text-2xl font-black bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">VVS</div>
                  <div className="text-sm text-light-300">Finance</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">1</span>
                </div>
                <p className="text-light-200">
                  Visit <a href="https://vvs.finance" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">vvs.finance</a> and connect your wallet
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">2</span>
                </div>
                <p className="text-light-200">
                  Navigate to the "Trade" section and select "Swap"
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">3</span>
                </div>
                <p className="text-light-200">
                  Select CRO as the "From" token and paste the contract address in the "To" field
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-primary-400 text-sm font-bold">4</span>
                </div>
                <p className="text-light-200">
                  Enter the amount of CRO you want to swap and click "Swap"
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://vvs.finance/swap?inputCurrency=CRO&outputCurrency=0x59795CdA23903315B7A9e6a3eDB775e53EF96706" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-center font-bold text-dark hover:from-primary-400 hover:to-secondary-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Buy on VVS Finance
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
