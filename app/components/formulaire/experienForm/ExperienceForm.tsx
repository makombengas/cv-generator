import { Experience } from '@/type';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

interface Props {
  experiences: Experience[];
  setExperiences: (experiences: Experience[]) => void;
}
const inputStyle = 'w-full p-2 border border-gray-300 rounded-md';
const inputTextareaStyle = 'textarea min-h-50 textarea-bordered w-full ';
const ExperienceForm: FC<Props> = ({ experiences, setExperiences }) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    id: '',
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Experience
  ) => {
    setNewExperience({
      ...newExperience,
      [field]: e.target.value,
    });
  };
  const handleAddExperience = () => {
    setExperiences([...experiences, newExperience]);
    setNewExperience({
      id: '',
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };
 const formulaireIntl = useTranslations('Form')
 const experiencesIntl = useTranslations('Experiences')
 
  return (
    <div className="">
        <div className='flex flex-col gap-6 '>
      <div className='flex justify-between items-center gap-4'>
        <input
          onChange={(e) => handleChange(e, 'jobTitle')}
          type='text'
          placeholder={experiencesIntl('jobTitle')}
          value={newExperience.jobTitle}
          className={inputStyle}
        />

        <input
          onChange={(e) => handleChange(e, 'companyName')}
          type='text'
          placeholder={experiencesIntl('companyName')}
          value={newExperience.companyName}
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
          placeholder={experiencesIntl('startDate')}
          value={newExperience.startDate}
          className={inputStyle}
        />

        <input
          onChange={(e) => handleChange(e, 'endDate')}
          type='text'
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = 'text';
          }}
          placeholder={experiencesIntl('endDate')}
          value={newExperience.endDate}
          className={inputStyle}
        />
      </div>
      <textarea
        onChange={(e) => handleChange(e, 'description')}
        placeholder={experiencesIntl('description')}
        value={newExperience.description}
        className={inputTextareaStyle}
      />
    </div>
      <button disabled={!newExperience.jobTitle || !newExperience.companyName || !newExperience.startDate || !newExperience.endDate} onClick={handleAddExperience} className='mt-6 float-right flex  items-center btn rounded-sm btn-primary'>
       <span className="  mr-2">{formulaireIntl('add')}</span>  <Plus className='w-4' />
      </button>
    </div>
  );
};

export default ExperienceForm;
