import ChevronLeftIcon from './icons/ChevLeft';
import ChevronRightIcon from './icons/ChevRight';

interface Props {
  currentPage: number;
  totalPage: number;
  totalItems: number;
  setCurrentPage: (page: number) => void;
  firstItemIndex: number;
  lastItemIndex: number;
}

const Pagination = ({ currentPage,totalPage, totalItems, setCurrentPage,firstItemIndex, lastItemIndex}: Props) => {
  let pages = []
  for(let i =1; i<= Math.ceil(totalPage); i++){
    pages.push(i)
  }

  const handlePrevPage = (e:any) => {
    e.preventDefault()
    if(currentPage <= 1){
      setCurrentPage(1);
    }else{
      setCurrentPage(currentPage-1)
    }
  }
  
  const handleNextPage = (e:any) => {
    e.preventDefault()
    if(currentPage >= totalPage){
      setCurrentPage(totalPage);
    }else {
      setCurrentPage(currentPage+1)
    }
    }
  return (
    <div className="flex items-center justify-between mt-4 px-4 py-3 sm:px-6"> 
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={handlePrevPage}
          className={`relative inline-flex items-center shadow-md rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}> 
          Previous
        </a>
        <a
         onClick={handleNextPage}
         className={`relative inline-flex items-center rounded-md shadow-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 ${
          currentPage === totalPage ? "cursor-not-allowed opacity-50" : ""
        }`}
        >
          Next
        </a>
      </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <p className='text-sm'>Showing <span>{firstItemIndex+1}</span> to
        {(lastItemIndex > totalItems)? <span> {totalItems} of</span> : <span> {lastItemIndex} of </span>   } <span><strong>{totalItems}</strong></span>  results 
      </p>
      <div>
        <div className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a
            onClick={handlePrevPage}
            className={`relative inline-flex items-center   px-2 py-2 text-sm font-medium text-gray-500 dark:text-gray-200 ${
            currentPage === 1 ? 'disabled ' : 'hover:bg-blue-200 dark:hover:bg-slate-400 focus:z-20 cursor-pointer'
          }`}>
            <span className="sr-only">Next</span>
            <ChevronLeftIcon />
          </a>
          {pages.map((page,index) => {
            return <a
            key={index}
            className={`relative inline-flex items-center   px-3 py-2  text-sm font-medium text-gray-500 dark:text-gray-200  focus:z-10 ${
              currentPage === page
                ? "bg-blue-200 dark:bg-slate-500  "
                : "hover:bg-blue-100/70 dark:hover:bg-slate-500/50 focus:z-20 cursor-pointer"
          }`} 
            onClick={() => {
              setCurrentPage(page);
              // window.scrollTo({ top: 0, behavior:'smooth' });
            }}>{page}
            </a>
          })}
          <a
            onClick={handleNextPage}
            className={`relative inline-flex items-center  px-2 py-2 text-sm font-medium text-gray-500 dark:text-gray-200 ${
            currentPage === totalPage ? 'disabled  ' : 'hover:bg-blue-200 dark:hover:bg-slate-400 focus:z-20 cursor-pointer'
            }`}>
            <span className="sr-only">Next</span>
            <ChevronRightIcon/>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Pagination