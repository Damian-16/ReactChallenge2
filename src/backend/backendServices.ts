import axios from "axios";
import env from '../../env.json';

const backendPort: string = env.BACKEND_PORT;



export const handleSearch = async (searchQuery: string) => {
  try {
    const response = await axios.get(`${backendPort}/search?title=${searchQuery}`);
    debugger
    console.log(response.data.config);
   
  
    return response.data
  } catch (error) {
    // if(response.data.length===0){
    //   alert("No search results found")
    // }
    console.error(error);
  
  }
};













