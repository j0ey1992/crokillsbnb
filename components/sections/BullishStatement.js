import { motion } from 'framer-motion';

export default function BullishStatement() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -15, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(0, 163, 255, 0.5)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
        
        {/* Floating Cronos logos */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.03 + Math.random() * 0.05,
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
              <svg width="40" height="46" viewBox="0 0 120.1 138.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.1,0L0,34.7v69.4l60.1,34.7l60-34.7V34.7L60.1,0z M102.3,93.8l-42.3,24.4L17.8,93.8V45l42.3-24.4L102.3,45V93.8z" fill="url(#bullish-logo-gradient-1)" />
                <path d="M60.1,138.8l60-34.7V34.7L60.1,0v20.6L102.3,45v48.9l-42.3,24.4V138.8z" fill="url(#bullish-logo-gradient-2)" />
                <path d="M60,0L0,34.7v69.4l60,34.7v-20.6L17.8,93.8V44.9L60,20.6V0z" fill="url(#bullish-logo-gradient-3)" />
                <path d="M88.1,85.6l-28,16.2L32,85.6V53.2L60.1,37l28,16.2L76.4,60l-16.4-9.5L43.7,60v18.9l16.4,9.5l16.4-9.5L88.1,85.6z" fill="url(#bullish-logo-gradient-4)" />
                <defs>
                  <linearGradient id="bullish-logo-gradient-1" x1="0" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                  <linearGradient id="bullish-logo-gradient-2" x1="60.1" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                  <linearGradient id="bullish-logo-gradient-3" x1="0" y1="0" x2="60" y2="138.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                  <linearGradient id="bullish-logo-gradient-4" x1="32" y1="37" x2="88.1" y2="101.8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00a3ff" />
                    <stop offset="1" stopColor="#8a2be2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-dark-100/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-primary-500/20"
        >
          <div className="flex items-center mb-8">
            <div className="w-1.5 h-12 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              Cronos: The Apex Predator of Web3
            </h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-light-200/90">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-medium"
            >
              While others merely compete, <span className="text-primary-400 font-bold">Cronos dominates</span>. As the most strategically positioned token in the Web3 ecosystem, CRO is systematically capturing market share through superior technology, community engagement, and ecosystem development.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The metrics don't lie. With exponential growth in user adoption, transaction volume, and developer activity, Cronos is establishing itself as the backbone of the next generation of decentralized applications and financial services.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4"
            >
              <div className="bg-dark-200/50 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-primary-400 mb-1">247%</div>
                <div className="text-sm text-light-300">YoY Growth</div>
              </div>
              <div className="bg-dark-200/50 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-primary-400 mb-1">1.2M+</div>
                <div className="text-sm text-light-300">Active Users</div>
              </div>
              <div className="bg-dark-200/50 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-primary-400 mb-1">$4.8B</div>
                <div className="text-sm text-light-300">TVL Potential</div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-bold"
            >
              The future is clear: Cronos will steadily outperform the market, absorbing liquidity from weaker projects and establishing itself as the premier blockchain ecosystem for serious investors and developers alike.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-4"
            >
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-dark font-bold tracking-tight">
                Ready for Domination
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
