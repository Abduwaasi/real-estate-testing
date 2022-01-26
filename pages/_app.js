import Router from "next/router"
import Head from "next/head"
import NpProgress from "nprogress"
import {ChakraProvider} from "@chakra-ui/react"

// Custom Import 
import Layout from "../Components/layout"

function MyApp({ Component, pageProps }) {
  return(
    <>
    {/* <Head></Head> */}
    <ChakraProvider>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    </ChakraProvider>
    </>
  )
}

export default MyApp
