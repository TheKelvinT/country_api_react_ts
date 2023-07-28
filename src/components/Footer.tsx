

const Footer = () => {
  return (
    <footer className='z-50 mt-8 max-w-screen w-full flex justify-center py-4 px-4 sm:px-8 bg-blue-100 dark:bg-slate-700 '>
        <div className='text-center'>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
            &copy; {new Date().getFullYear()} Worldwide. All rights reserved.
        </p>
        <p className='text-xs mt-1 text-gray-500 dark:text-gray-400'>
            Powered by React and Tailwind CSS
        </p>
        </div>
  </footer>
  )
}

export default Footer