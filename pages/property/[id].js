import {Box, Text, Flex, Spacer, Avatar} from "@chakra-ui/react"
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import ImageScrollbar from "../../Components/imageScrollbar"
import {baseUrl, fetchApi} from "../../utils/fetchApi"

const PropertyDetails = ({propertyDetails:{ price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos }})=>(
  <Box>
      {photos && <ImageScrollbar data = {photos}/>}
  </Box>
)

export default PropertyDetails
const styles = {
    container:{
        maxWidth:"1000px",
        margin:"auto",
        p:"4"
    }
}

export  async function getServerSideProps ({params:{id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail/?externalID=${id}`)
    return {
        props:{
            propertyDetails:data
        }
    }
}