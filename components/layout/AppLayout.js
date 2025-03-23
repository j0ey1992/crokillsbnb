import { useEffect } from 'react';
import Head from 'next/head';
import { createAppKit } from '@reown/appkit/react';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import { mainnet, arbitrum } from '@reown/appkit/networks';
import Header from './Header';
import Footer from './Footer';

// Initialize AppKit outside of the component to avoid re-renders
const projectId = 'YOUR_PROJECT_ID'; // Replace with your actual project ID in production

// Create metadata object
const metadata = {
  name: 'CRO KILL BNB',
  description: 'Power to the Cronos Community',
  url: 'https://crokillsbnb.com', // Replace with your actual domain
  icons: ['/cronos-logo.svg']
};

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

export default function AppLayout({ children, title = 'CRO KILL BNB - Power to the Cronos Community' }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-100 to-dark-200 text-light">
      <Head>
        <title>{title}</title>
        <meta name="description" content="CRO KILL BNB – Power to the Cronos Community" />
        <link rel="icon" href="/cronos-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      
      <main className="pt-24 pb-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
