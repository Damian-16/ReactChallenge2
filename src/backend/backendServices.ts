import axios from "axios";
import { BACKEND_PORT } from '../../env.json';

export const handleSearch = async (searchQuery: string) => {
  try {
    const response = await axios.get(`${BACKEND_PORT}/search?title=${searchQuery}`);
    
    console.log(response.data);
  } catch (error) {
   
    console.error(error);
  }
};













