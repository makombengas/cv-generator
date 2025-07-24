

import { Hobby } from '@/type';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

interface Props {
  hobbies: Hobby[];
  setHobbies: (hobbies: Hobby[]) => void;
}
const inputStyle = 'w-full p-2 border border-gray-300 rounded-md';

const HobbyForm: FC<Props> = ({ hobbies, setHobbies }) => {
  const [newHobbies, setNewHobbies] = useState<Hobby>({
    id: '',
    name: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Hobby
  ) => {
    setNewHobbies({
      ...newHobbies,
      [field]: e.target.value,
    });
  };
  const handleAddHobbies = () => {
    setHobbies([...hobbies, newHobbies]);
    setNewHobbies({
      id: '',
      name: '',
    });
  };
const formulaireIntl = useTranslations('Form')
const hobbiesIntl = useTranslations('Hobbies')
  return (
    <div className="">
        <div className='flex flex-col gap-6 '>
      <div className='flex justify-between items-center gap-4'>
        <input
          onChange={(e) => handleChange(e, 'name')}
          type='text'
          placeholder={hobbiesIntl('hobbyName')}
          value={newHobbies.name}
          className={inputStyle}
        />

       
      </div>

     
    </div>
      <button disabled={!newHobbies.name} onClick={handleAddHobbies} className='mt-6 float-right flex  items-center btn rounded-sm btn-primary'>
       <span className="  mr-2">
          {formulaireIntl('add')}</span>  <Plus className='w-4' />
      </button>
    </div>
  );
};

export default HobbyForm;
