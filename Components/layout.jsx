import Head from "next"
import {Box} from "@chakra-ui/react"

function Layout ({children}){
    return(
        <>
          <Head>
              <title>Real Estate</title>
          </Head>
          <Box maxWidth="1280px" m="auto">
            <header>
                Header
            </header>
            <main>{children}</main>
          </Box>
          <footer>
              Footer
          </footer>
        </>
    )
}   


export default Layout