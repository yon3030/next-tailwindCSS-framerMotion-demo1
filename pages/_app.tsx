import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
