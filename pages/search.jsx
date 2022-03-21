import {useState} from "react"
import {useRouter} from "next/router"
import Image from "next/image"
import {Flex, Box, Text, Icon} from "@chakra-ui/react"
import {BsFilter} from "react-icons/bs"
import SearchFilter from "../Components/SearchFilter"
import Property from "../Components/property"
import {fetchApi,baseUrl} from "../utils/fetchApi" 

// Asset
import noResult from "../assets/Image/noresult.svg"

const Search = ({properties})=>{
 const [searchFilter, setSearchFilter] = useState(false)
 const router = useRouter()



 return (
     <Box>
         <Flex sx={styles.searchTop} onClick={()=>setSearchFilter((prevState)=>!prevState)}>
           <Text>Search properties by filters</Text>
           <Icon sx={styles.searchIcon} as={BsFilter}/>
         </Flex>
         {searchFilter && <SearchFilter/>}
         <Text sx={styles.searchPurpose}>
            Properties  {router.query.purpose}
         </Text>
         <Flex sx={styles.propertyContainer}>
          { properties.map(property=>(<Property property={property} key={property.id}/>) )}
         </Flex>
         {properties.length === 0 &&(
             <Flex sx={styles.emptyProperty}>
                <Image alt="No result found" src={noResult}/>
                <Text sx={styles.emptyProperty.Text}>No result found</Text>
             </Flex>
         )}
     </Box>
 )
}

const styles = {
    searchTop:{
        cursor:"pointer",
        bg:"gray.100",
        borderBottom:"1px",
        borderColor:"gray.200",
        padding:"2",
        fontWeight:"black",
        fontSize:"lg",
        justifyContent:"center",
        alignItems:"center",
    },
    searchIcon:{
        paddingLeft:"2",
        w:"2rem"
    },
    searchPurpose:{
        fontSize:"2xl",
        padding:"4",
        fontWeight:"bold"
    },
    propertyContainer:{
        flexWrap:"wrap"
    },
    emptyProperty:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        my:"5",
      Text:{
         fontWeight:"bold",
         fontSize:"2rem",
         mt:"3"
      }, 

    },
}


export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  

export default Search