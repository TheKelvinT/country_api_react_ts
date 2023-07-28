type Props = {
    searchQuery:string;
    setSearchQuery:(searchQuery:string) => void;
    setCurrentPage: (currentPage:number) => void;
 }   

const SearchBar = ({searchQuery, setSearchQuery, setCurrentPage}: Props) => {
    const handleSearch = (event: any) => {
      setSearchQuery(event.target.value);
      setCurrentPage(1);
    };
 
    return (
    <div className='flex items-center gap-2'>
      <label>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </label>
      
      <input
        type='text'
        placeholder='Country Name'
        value={searchQuery}
        onChange={handleSearch}
        className='w-full sm:w-64 px-4 py-2 border rounded-md  placeholder-gray-400 text-gray-800 dark:text-white  dark:bg-gray-700 dark:border-gray-700'
      />
    </div>
  )
}

export default SearchBar