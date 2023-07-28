import { CountryData } from '../types/CountryData';
import { shuffleArray } from '../utils/utils';

const API_BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchCountryById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    const data = await response.json();
    const countryById = data.find((country: CountryData) => country.name.common.toLowerCase() === id);
    return countryById || null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const fetchShuffledCountries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    const data = await response.json();
    const shuffledCountries = shuffleArray(data);
    return shuffledCountries;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};