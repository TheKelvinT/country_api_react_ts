import { useEffect } from 'react';
import Sun from '../icons/Sun';
import Moon from '../icons/Moon';

type Props = {
  theme: string | null;
  setTheme: (theme: string) => void;
};

const Mode = ({ theme, setTheme }: Props) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className='h-16 w-16 flex-center items-center' onClick={handleThemeSwitch}>
      {theme === 'dark' ? <Sun/> : <Moon/>}
    </button>
  );
};

export default Mode;