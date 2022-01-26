import axios from "axios"
export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi= async (url)=>{
   const {data} = await axios.get((url),{
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '7dfa3fcee4mshba1de027cde6fc4p1da804jsn71befef17349'
      }
   })
   return data
}
