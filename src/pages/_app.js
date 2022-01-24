import '../styles/globals.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import AppBar from '../components/appBar/index.tsx'

function MyApp({ Component, pageProps }) {
  return (
	    <ChakraProvider>
      <ColorModeScript initialColorMode='light'/>
			<AppBar></AppBar>
      <Component {...pageProps} />
    </ChakraProvider>
	)
}

export default MyApp
