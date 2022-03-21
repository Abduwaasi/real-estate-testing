import {Box} from "@chakra-ui/react"

const Footer=()=>{
    return(
        <Box sx={styles.footer}>
            &copy;{` ${new Date().getFullYear()} Global Express Reality`}
        </Box>
    )
}

const styles= {
    footer:{
        textAlign:"center",
        padding:"5", 
        color:"gray.500",
        borderTop:"1px",
        borderColor:"gray.100",
    }
}

export default Footer