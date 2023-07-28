import  { useState, ChangeEvent } from 'react';
import Filter from './icons/Filter';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  onChange: (value: string) => void;
};

const CustomSelect = ({ options, onChange }: Props) => {
const [selectedOption, setSelectedOption] = useState('');

const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  const selectedValue = event.target.value;
  setSelectedOption(selectedValue);
  if (onChange) {
    onChange(selectedValue);
   }
};

  return (
    <div className='flex items-center gap-2'>
      <Filter />
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className='w-full sm:w-64 px-4 py-2 border rounded-md text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-700  '
        >
        <option value='' className='text-gray-400 dark:text-gray-400  '>
          All Countries
        </option>
        {options.map((option: Option) => (
          <option
            key={option.value}
            value={option.value}
            className='text-gray-800 dark:text-white'
          >
        {option.label}
          </option>
        ))}
        </select>
    </div>
  );
};

export default CustomSelect;
