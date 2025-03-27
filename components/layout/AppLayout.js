import { useEffect } from 'react';
import Head from 'next/head';
import { createAppKit } from '@reown/appkit/react';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import { mainnet, arbitrum } from '@reown/appkit/networks';
import Header from './Header';
import Footer from './Footer';

// Create metadata object
const metadata = {
  name: 'CRO KILL BNB',
  description: 'Power to the Cronos Community',
  url: 'https://crokillsbnb.com', // Replace with your actual domain
  icons: ['/cronos-logo.svg']
};

// Initialize AppKit only on the client side
let appKitInitialized = false;
if (typeof window !== 'undefined' && !appKitInitialized) {
  // Use a demo project ID for development
  // For production, get your own project ID from https://cloud.walletconnect.com
  const projectId = '3a8170812b534d0ff9d794f19a901d64'; // Demo project ID
  
  // Create the AppKit instance
  createAppKit({
    adapters: [new Ethers5Adapter()],
    metadata: metadata,
    networks: [mainnet, arbitrum],
    projectId,
    features: {
      analytics: true
    }
  });
  
  appKitInitialized = true;
}

export default function AppLayout({ children, title = 'CRO KILL BNB - Power to the Cronos Community' }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800/95 to-secondary-900/90 text-light relative">
      {/* Cronos logo background pattern with deterministic positions */}
      <div className="absolute inset-0 z-0 opacity-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => {
            // Use deterministic positions based on index
            const top = (i * 5) % 100;
            const left = ((i * 7) + 3) % 100;
            const opacity = 0.1 + (i % 10) * 0.02;
            const rotation = (i * 18) % 360;
            const scale = 0.5 + (i % 10) * 0.05;
            
            return (
              <div 
                key={i} 
                className="absolute"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: opacity,
                  transform: `rotate(${rotation}deg) scale(${scale})`
                }}
              >
                <svg width="40" height="46" viewBox="0 0 120.1 138.8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.1,0L0,34.7v69.4l60.1,34.7l60-34.7V34.7L60.1,0z M102.3,93.8l-42.3,24.4L17.8,93.8V45l42.3-24.4L102.3,45V93.8z" fill="url(#app-logo-gradient-1)" />
                  <path d="M60.1,138.8l60-34.7V34.7L60.1,0v20.6L102.3,45v48.9l-42.3,24.4V138.8z" fill="url(#app-logo-gradient-2)" />
                  <path d="M60,0L0,34.7v69.4l60,34.7v-20.6L17.8,93.8V44.9L60,20.6V0z" fill="url(#app-logo-gradient-3)" />
                  <path d="M88.1,85.6l-28,16.2L32,85.6V53.2L60.1,37l28,16.2L76.4,60l-16.4-9.5L43.7,60v18.9l16.4,9.5l16.4-9.5L88.1,85.6z" fill="url(#app-logo-gradient-4)" />
                  <defs>
                    <linearGradient id="app-logo-gradient-1" x1="0" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                    <linearGradient id="app-logo-gradient-2" x1="60.1" y1="0" x2="120.1" y2="138.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                    <linearGradient id="app-logo-gradient-3" x1="0" y1="0" x2="60" y2="138.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                    <linearGradient id="app-logo-gradient-4" x1="32" y1="37" x2="88.1" y2="101.8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00a3ff" />
                      <stop offset="1" stopColor="#8a2be2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="CRO KILL BNB – Power to the Cronos Community" />
        <link rel="icon" href="/cronos-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      
      <main className="pt-28 pb-12">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
