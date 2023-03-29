import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import '@/styles/Nprogress.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'; 

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false })
NProgress.configure({ easing: 'ease-in', speed: 700 });
NProgress.configure({ trickleSpeed: 900 });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
