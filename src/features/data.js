import axios from 'axios';

// Define an async function to fetch the data
async function fetchBeers() {
  try {
    const response = await axios.get('https://api.sampleapis.com/beers/ale');
    return response.data;
  } catch (error) {
    console.error('Error fetching the beers:', error);
    throw error;
  }
}
export default fetchBeers;
