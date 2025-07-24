
import { Language } from '@/type';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

interface Props {
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
}
const inputStyle = 'w-full p-2 border border-gray-300 rounded-md';
// const inputTextareaStyle = 'textarea min-h-50 textarea-bordered w-full ';
const LanguageForm: FC<Props> = ({ languages, setLanguages }) => {
  const [newLanguages, setNewLanguages] = useState<Language>({
    id: '',
    language: '',
    proficiency: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof Language
  ) => {
    setNewLanguages({
      ...newLanguages,
      [field]: e.target.value,
    });
  };
     const handleAddLanguage = () => {
        setLanguages([...languages, newLanguages])
        setNewLanguages(
            {
                language: '',
                proficiency: ''
            }
        )
    }
const formulaireIntl = useTranslations('Form')
const languagesIntl = useTranslations('Language')
  return (
    <div className="">
        <div className='flex flex-col gap-6 '>
      <div className='flex justify-between items-center gap-4'>
        <input
          onChange={(e) => handleChange(e, 'language')}
          type='text'
          placeholder={languagesIntl('lang')}
          value={newLanguages.language}
          className={inputStyle}
        />

       <select value={newLanguages.proficiency} onChange={(e) => handleChange(e, 'proficiency')} className={`select select-bordered ${inputStyle}  `}>
       
       <option value="">{languagesIntl('choose')} </option>
        <option value="Anfänger">{languagesIntl('beginner')} </option>
                <option value="Mittelstufe">{languagesIntl('intermediate')} </option>
                <option value="Fortgeschritten">{languagesIntl('advanced')} </option>
      
       </select>

      </div>
    </div>
      <button disabled={!newLanguages.language || !newLanguages.proficiency} onClick={handleAddLanguage} className='mt-6 float-right flex  items-center btn rounded-sm btn-primary'>
       <span className="  mr-2">
        {formulaireIntl('add')}
        </span>  <Plus className='w-4' />
      </button>
    </div>
  );
};

export default LanguageForm;
