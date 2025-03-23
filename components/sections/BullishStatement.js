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
