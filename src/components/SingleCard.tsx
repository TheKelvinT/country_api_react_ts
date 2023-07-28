import {Link} from 'react-router-dom'
import { CountryData } from '../types/CountryData'
type Props = {
    data: CountryData
}

const SingleCard = ({data}: Props) => {
    const formatPopulation = (population: number) => {
        return population?.toLocaleString();
    };
    const path = `/${data.name.common.toLowerCase()}`
  
  return (
    <Link to={path} key={data.name.common}   className='hover:scale-105 transform transition-transform duration-500 dark:bg-slate-700 w-64 overflow-hidden shadow-xl'>
        <div className='h-36 w-64'>
            <img src={data?.flags?.png} alt={data.name.common} className=' object-fit h-full w-full'  />
        </div>
        <div className='p-4 flex flex-col gap-1.5'>
            <p className='font-bold text-lg mb-1'>{data?.name.common}</p>
            <p className='font-bold text-sm'>Capital : <span className='font-normal'>{data?.capital}</span></p>
            <p className='font-bold text-sm'>Population: <span className='font-normal'>{formatPopulation(data?.population)}</span></p>
            <p className='font-bold text-sm'>Region: <span className='font-normal'>{data?.region}</span></p>
        </div>
    </Link>

  )
}

export default SingleCard