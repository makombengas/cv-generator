
import { Skill } from '@/type';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

interface Props {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}
const inputStyle = 'w-full p-2 border border-gray-300 rounded-md';
const SkillsForm: FC<Props> = ({ skills, setSkills }) => {
  const [newSkills, setNewSkills] = useState<Skill>({
    id: '',
    name: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Skill
  ) => {
    setNewSkills({
      ...newSkills,
      [field]: e.target.value,
    });
  };
  const handleAddSills = () => {
    setSkills([...skills, newSkills]);
    setNewSkills({
      id: '',
      name: '',
    });
  };
  const formulaireIntl = useTranslations('Form')
  const skillsIntl = useTranslations('Skills')
  return (
    <div className="">
        <div className='flex flex-col gap-6 '>
      <div className='flex justify-between items-center gap-4'>
        <input
          onChange={(e) => handleChange(e, 'name')}
          type='text'
          placeholder={skillsIntl('skillName')}
          value={newSkills.name}
          className={inputStyle}
        />       
      </div>

     
    </div>
      <button disabled={!newSkills.name} onClick={handleAddSills} className='mt-6 float-right flex  items-center btn rounded-sm btn-primary'>
       <span className="  mr-2">
        {formulaireIntl('add')}
        </span>  <Plus className='w-4' />
      </button>
    </div>
  );
};

export default SkillsForm;
