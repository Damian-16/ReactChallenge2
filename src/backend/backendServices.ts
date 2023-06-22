import axios from "axios";
import env from '../../env.json';

const backendPort: string = env.BACKEND_PORT;



export const handleSearch = async (searchQuery: string) => {
  try {
    const response = await axios.get(`${backendPort}/search?title=${searchQuery}`);
    
    console.log(response.data);
  } catch (error) {
   
    console.error(error);
  }
};













