import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryData } from '../types/CountryData';
import SingleCard from '../components/SingleCard';
import {Link} from 'react-router-dom'
import Emblem from '../assets/un.svg'
import DarkEmblem from '../assets/un-black.svg'
import { shuffleArray } from '../utils/utils';
import {Tooltip, Skeleton} from 'antd'
import Loading from '../components/Loading';

const Country = () => {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<CountryData | null>(null);
  const [shuffledCountry, setShuffledCountry] = useState<CountryData [] | null>([]);
  const [loading, setLoading] = useState<boolean>(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log(data); // Check the response data
        const countryById = data.find((country: CountryData) => country.name.common.toLowerCase() === id);
        setCountry(countryById || null);
        console.log(countryById)

        const shuffledCountry = shuffleArray(data)
        setShuffledCountry(shuffledCountry)
      } catch (error) {
        console.error('Error fetching data:', error);
      }  finally {
        setLoading(false); 
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col justify-center mt-36  ">
     {country && <div className='text-sm mb-12 md:mx-0 text-slate-500 dark:text-slate-300'>
          <Link to='/'><span className='cursor-pointer'>Home</span></Link>  / <span className=' underline text-blue-700 dark:text-blue-300'>{country.name.common}</span>
      </div> } 
      <div className=" xl:max-w-[1120px] flex md:flex-row flex-col items-center  gap-16  shadow-xl dark:bg-slate-700 h-10/12 p-8 md:p-12">
        {/* Country Flag */}
        <div className="basis-1/2 w-full h-[256px] shadow-md">
          {!country || loading ?   <Skeleton.Image active style={{height:"256px", width:"320px"}}/> :  <img src={country?.flags?.png} alt={country?.name.common} className="w-full h-full object-fit" />  }
        </div>

        {/* Country Information */}
        {!country || loading ? <Skeleton active/> : 
        <div className="col-span-1 lg:col-span-3 w-full basis-1/2">
        <div className='flex justify-between items-center mb-4 gap-6'>
      <h1 className="text-2xl font-bold">{country?.name.common}</h1>
      {country?.unMember ? (
        <Tooltip className='cursor-pointer' title={`${country?.name.common} is part of United Nations`} placement='bottom'>
          <img src={Emblem} alt="" className='h-12' />
        </Tooltip>
      ) : (
        <Tooltip className='cursor-pointer' title={`${country?.name.common} is not part of United Nations`} placement='bottom'>
          <img src={DarkEmblem} alt="" className='h-12' />
        </Tooltip>
      )}
    </div>
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-24 gap-y-4 mb-4">
            <div>
              <p className="font-bold">Continent</p>
              <p>{country?.continents}</p>
            </div>
            <div>
              <p className="font-bold">Capital</p>
              <p>{country?.capital}</p>
            </div>
 
            <div>
              <p className="font-bold">IDD Code</p>
              <p>{country?.idd?.root}</p>
            </div>
            <div>
              <p className="font-bold">Population</p>
              <p>{country?.population?.toLocaleString()}</p>
            </div>
          </div>
          <div className='mb-4'>
                <p className="font-bold">Time Zone(s)</p>
                <div className="flex flex-wrap gap-2 mt-2">
                {country?.timezones.map((timezone, index) => ( 
                    <p className="px-3 py-1 bg-gray-300 rounded-full text-sm text-gray-700" key={index}>{timezone}</p>
                ))}
                </div>
            </div>
          <div className='mb-4 '>
          {country?.borders && country?.borders.length > 0 && (
            <div>
              <p className="font-bold">Border Countries</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {country?.borders.map((borderCountryCode) => {
                  const borderCountry = shuffledCountry?.find((country) => country.cca3 === borderCountryCode);
                  if (borderCountry) {
                    return (
                      <Link to={`/${borderCountry.name.common.toLowerCase()}`} key={borderCountryCode}>
                        <button className="hover:scale-110 transform transition-transform duration-500 px-3 py-1 bg-gray-300 rounded-full text-sm text-gray-700">
                          {borderCountryCode}
                        </button>
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          )}
          </div>
        </div>
        }
      </div>
      
      <div className='text-center my-20'>
          <h1 className='text-2xl font-bold px-4'>
            Other Countries You May Like
          </h1>
        {!country || loading ? <Loading type="small"/> :
        <div className='mt-12 flex justify-center gap-8'>  
        {shuffledCountry && (
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-center'>
            {shuffledCountry.slice(0, 4).map((country) => (
              <SingleCard data={country} key={country.cca3} />
            ))}
          </div>
        )}
        </div>
        }
      </div>
    </div>
  );
};

export default Country;
