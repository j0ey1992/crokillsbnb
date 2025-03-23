import "@/styles/globals.css";
import { Space_Grotesk } from 'next/font/google';

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${spaceGrotesk.variable}`}>
        <Component {...pageProps} />
      </div>
      <style jsx global>{`
        :root {
          --font-space-grotesk: 'Space Grotesk', sans-serif;
        }
        
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
