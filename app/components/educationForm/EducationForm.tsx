import { Education } from '@/type';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

interface Props {
  educations: Education[];
  setEducations: (experiences: Education[]) => void;
}
const inputStyle = 'w-full p-2 border border-gray-300 rounded-md';
const inputTextareaStyle = 'textarea min-h-50 textarea-bordered w-full ';
const EducationForm: FC<Props> = ({ educations, setEducations }) => {
  const [newEducations, setNewEducations] = useState<Education>({
    id: '',
    degree: '',
    school: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Education
  ) => {
    setNewEducations({
      ...newEducations,
      [field]: e.target.value,
    });
  };
  const handleAddExperience = () => {
    setEducations([...educations, newEducations]);
    setNewEducations({
      id: '',
      degree: '',
      school: '',
      startDate: '',
      endDate: '',
      description: '',
     
    });
  };
  const formulaireIntl = useTranslations('Form')
  const educationsIntl = useTranslations('Educations')
  return (
    <div className="">
        <div className='flex flex-col gap-6 '>
      <div className='flex justify-between items-center gap-4'>
        <input
          onChange={(e) => handleChange(e, 'degree')}
          type='text'
          placeholder={educationsIntl('degree')}
          value={newEducations.degree}
          className={inputStyle}
        />

        <input
          onChange={(e) => handleChange(e, 'school')}
          type='text'
          placeholder={educationsIntl('schoolName')}
          value={newEducations.school}
          className={inputStyle}
        />
      </div>

      <div className='flex justify-between items-center gap-4'>
        <input
          onChange={(e) => handleChange(e, 'startDate')}
          type='text'
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = 'text';
          }}
          placeholder={educationsIntl('startDate')}
          value={newEducations.startDate}
          className={inputStyle}
        />

        <input
          onChange={(e) => handleChange(e, 'endDate')}
          type='text'
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = 'text';
          }}
          placeholder={educationsIntl('endDate')}
          value={newEducations.endDate}
          className={inputStyle}
        />
      </div>
      <textarea
        onChange={(e) => handleChange(e, 'description')}
        placeholder={educationsIntl('description')}
        value={newEducations.description}
        className={inputTextareaStyle}
      />
    </div>
      <button disabled={!newEducations.degree || !newEducations.school || !newEducations.startDate || !newEducations.endDate} onClick={handleAddExperience} className='mt-6 float-right flex  items-center btn rounded-sm btn-primary'>
       <span className="  mr-2">{formulaireIntl('add')}</span>  <Plus className='w-4' />
      </button>
    </div>
  );
};

export default EducationForm;
