import 'styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'
import { ThemeProvider } from 'contexts/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('initialvalue')

  function updateTheme(themeName: string) {
    console.log(`updateTheme ${themeName}`)
    setTheme(themeName)
  }

  return (
    <SigningCosmWasmProvider>
      <ThemeProvider updateTheme={updateTheme} theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SigningCosmWasmProvider>
  )
}
export default MyApp
