import '../styles/globals.css'
import '../styles/auth.css'
import '../styles/chats.css'
import type { AppProps } from 'next/app'
import ContextProvider from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
