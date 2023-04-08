import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {
              ease: "linear",
              duration: 0.5,
              delay: 0.1,
            }}}
            exit={{ opacity: 0 }}>
            <Component {...pageProps} />
          </motion.div>  
        </AnimatePresence>  
      </Layout>
    </>
  );
}
