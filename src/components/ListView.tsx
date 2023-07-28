import { CountryData } from '../types/CountryData';
import { Link } from 'react-router-dom';

type Props = {
  countries: CountryData[];

};
const ListView = ({ countries }: Props) => {
  const formatPopulation = (population: number) => {
   
    return population?.toLocaleString();
  };
 


  
  return (
    <table className='table-auto w-full lg:w-[964px] xl:w-[1168px]'>
      <thead>
        <tr className=''>
          <th className='min-w-[150px] px-4 py-2 border-t-0 border-b-2 text-start '>Flag</th>
          <th className='px-4 py-2 border-t-0 border-b-2 text-start'>Country Info</th>
          <th className='hidden sm:table-cell px-4 py-2 border-t-0 border-b-2 text-start'>Details</th>
          {/* <th className='px-4 py-2 border-t-0 border-b-2'>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.name.common} className=' hover:scale-105 transform transition-transform duration-500 dark:bg-slate-700 border border-slate-300 border-r-0 border-l-0 hover:bg-blue-100 dark:hover:bg-slate-500'>         
            <td className='px-4 py-4 border-t-0 border-b-0 border-r-0'>
              <Link to={`/${country.name.common.toLowerCase()}`}><img src={country?.flags?.png} alt={country.name.common} className='h-16 w-32 object-fit shadow-lg cursor-pointer' /></Link>
            </td>
            <td className='px-4 py-2 border-t-0 border-b-0'>
              <Link to={`/${country.name.common.toLowerCase()}`}>
                <p className='font-bold text-lg'>{country?.name.common}</p>
                <p className='font-bold text-sm'><span className='font-normal'>{country?.capital}</span></p>
              </Link>
            </td>
            <td className='hidden sm:table-cell px-4 py-2 border-t-0 border-b-0'>
              <Link to={`/${country.name.common.toLowerCase()}`}>
                <p className='font-bold text-sm'>Population: <span className='font-normal'>{formatPopulation(country?.population)}</span></p>
                <p className='font-bold text-sm'>Region: <span className='font-normal'>{country?.region}</span></p>
              </Link>
            </td>
          </tr> 
        ))}
      </tbody>
    </table>
  );
};

export default ListView;
