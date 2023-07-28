import Mode from './Mode';
import {Link} from 'react-router-dom'
import Globe from '../../assets/globe.png'
type Props = {
  theme: string | null;
  setTheme: (theme: string) => void;
};

const Navbar = ({ theme, setTheme }: Props) => {
  return (
    <div className='z-50 max-w-screen w-full flex justify-between p-4 px-4 sm:px-8 nav bg-blue-100 dark:bg-slate-700 fixed'>
      <Link to="/">
        <div  className='flex-center items-center gap-2 sm:gap-4'>
          <img src={Globe} alt="" className='w-16' />
          <span className='text-2xl sm:text-4xl itali'>Worldwide</span>
        </div>
      </Link>
      <div className='flex items-center'>
        <Mode theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Navbar;