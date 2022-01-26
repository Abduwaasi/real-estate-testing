import Link from "next/link"
import Image from "next/image"
import {Box, Flex, Text,Avatar} from "@chakra-ui/react"
import millify from "millify"
import {FaBed, FaBath} from "react-icons/fa"
import {BsGridFill} from "react-icons/bs"
import {GoVerified} from "react-icons/go"
import DefaultImage from "../assets/Image/house.jpg"

const Property=({property:{coverPhoto,price,rentFrequency,rooms, title,baths,area,agency,isVerified,externalId}})=>(
 <Link href={`/property/${externalId}`} passHref>
    <Flex flexWrap="wrap" padding="5" paddingTop="0" width="420px" justifyContent="flex-stat" cursor="pointer">
      <Box>
          <Image src={coverPhoto ? coverPhoto.url :DefaultImage} width="400px" height="250px" alt ="house"/>
      </Box>
      <Box w="full">
         <Flex justifyContent="space-between" alignItems="center" paddingTop="2">
           <Flex alignItems="center">
              <Box paddingRight="3" color="green.500">{isVerified && <GoVerified/>}</Box>
              <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
           </Flex>
           <Box>
               <Avatar size="sm" src={agency?.logo?.url}/>
           </Box>
         </Flex>
         <Flex justifyContent="space-between" alignItems="center" width="250px" color="blue.500">
            {rooms} <FaBed/> | {baths} <FaBath/> {millify(area)} sqft <BsGridFill/>
         </Flex>
      </Box>
    </Flex>
 </Link>
)

export default Property
