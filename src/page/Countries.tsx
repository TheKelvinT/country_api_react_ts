import { useEffect, useState } from 'react';
import SingleCard from '../components/SingleCard';
import { CountryData } from '../types/CountryData';
import CustomSelect from '../components/CustomSelect';
import ListView from '../components/ListView';
import Grid from '../components/icons/Grid';
import ListIcon from '../components/icons/ListIcon';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import { fetchAllCountries } from '../api/api';
type Props = {
  view: string;
  setView: (view: string) => void; 
};

const Countries = ({view, setView}: Props) => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(24)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const countries = await fetchAllCountries();
        setCountries(countries);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    setCurrentPage(1)
  };

  const handleGridButton = () => {
    setView('grid');
  };

  const handleListButton = () => {
    setView('list');
  };

  const filteredCountries = countries
  .filter((country) => !selectedRegion || country.region === selectedRegion)
  .filter((country) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) => a.name.common.localeCompare(b.name.common));

  // Pagination
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
    {loading? <Loading type='large'/> : 
      <section className='mt-32 mx-8 max-w-screen min-w-[303px]'>
        <div className='sm:flex flex-col sm:flex-row sm:justify-between py-4 mb-4 '>
          <div className='lg:flex lg:gap-x-8 lg:flex-row flex-col lg:gap-y-0'>
            <div className="mb-4 lg:mb-0">
          <SearchBar searchQuery = {searchQuery} setSearchQuery={setSearchQuery} setCurrentPage={setCurrentPage}/>
            </div>
        
            <CustomSelect
              options={[
                { value: 'Asia', label: 'Asia' },
                { value: 'Americas', label: 'Americas' },
                { value: 'Africa', label: 'Africa' },
                { value: 'Europe', label: 'Europe' },
                { value: 'Oceania', label: 'Oceania' },
              ]}
              onChange={handleRegionChange}
            />
          
          </div>
          <div className='flex justify-start items-center gap-2 mt-8 sm:mt-0'>
            <button onClick={handleGridButton}   className={`shadow-md inline-flex items-center px-4 py-2 text-sm  font-medium rounded-md ${
            view ==='grid' ? 'bg-blue-200 dark:bg-gray-400' : 'bg-gray-200  dark:bg-gray-700 text-gray-900'
            } hover:bg-opacity-80 hover:cursor-pointer`}>
              <Grid/>
            </button>
            <button onClick={handleListButton} className={`shadow-md inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
            view ==='list' ? 'bg-blue-200  dark:bg-gray-400' : 'bg-gray-200 dark:bg-gray-700 first-letter: text-gray-900'
            } hover:bg-opacity-80 hover:cursor-pointer`}>
              <ListIcon/>
            </button>
          </div>
        </div>
        <div className={view === 'grid' ? 'py-8 border-t border-gray-200 flex-center' : 'flex-center'}
        >
        {currentItems.length === 0 ? (
          <div className="py-12 text-center text-xl lg:w-[1168px] text-black dark:text-white">
          No Data Found
          </div>
        ) : view === 'grid' ? (
          <div className="lg:max-w-[1168px]  grid place-content-between grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-12">
            {currentItems
              .filter((country) => !selectedRegion || country.region === selectedRegion)
              .filter((country) =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((country) => (
                <SingleCard data={country} key={country.cca3} />
              ))}
          </div>
        ) : (
          <ListView countries={currentItems} />
        )}
        </div>

        {/* Pagination Buttons */}
        <Pagination 
          totalItems={filteredCountries?.length} 
          totalPage = {totalPages}
          currentPage = {currentPage}
          setCurrentPage={setCurrentPage}
          firstItemIndex={indexOfFirstItem}
          lastItemIndex={indexOfLastItem}
        />
      </section> 
    }
    </>
  )
}

export default Countries