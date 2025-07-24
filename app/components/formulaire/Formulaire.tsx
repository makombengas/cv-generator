'use client';

import { Eye, RotateCcw } from 'lucide-react';
import PersonalDetailForm from '../personalDetailForm/PersonalDetailForm';
import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '@/type';
import { FC } from 'react';
import ExperienceForm from './experienForm/ExperienceForm';
import EducationForm from '../educationForm/EducationForm';
import LanguageForm from '../languageForm/LanguageForm';
import SkillsForm from '../skillsForm/SkillsForm';
import HobbyForm from '../hobbyForm/HobbyForm';
import { useTranslations } from 'next-intl';


interface Props {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
  file: File | null;
  handlePersonalDetails: () => void;
  experiences: Experience[];
  setExperiences: (experiences: Experience[]) => void;
  handleResetExperience: () => void;
  handleResetEducation: () => void;
  educations: Education[];
  setEducations: (educations: Education[]) => void;
  handleResetLanguage: () => void;
  setLanguages: (languages: Language[]) => void;
  languages: Language[];
  handleResetSkills: () => void
  setSkills: (skills: Skill[]) => void
  skills: Skill[],
  setHobbies: (hobbies: Hobby[]) => void
  hobbies:Hobby[]
  handleResetHobbies: () => void
  isPreviewModalOpen: boolean,
  setIsPreviewModalOpen: (isOpen: boolean) => void

}

const Formulaire: FC<Props> = ({
  personalDetails,
  setPersonalDetails,
  setFile,
  file,
  handlePersonalDetails,
  experiences,
  setExperiences,
  handleResetExperience,
  handleResetEducation,
  educations,
  setEducations,
  handleResetLanguage,
  setLanguages,
  languages,
  handleResetSkills,
  setSkills,
  skills,
  setHobbies,
  hobbies,
  handleResetHobbies,
  setIsPreviewModalOpen
}) => {
  const formulaireIntl = useTranslations('Form')
  return (
    <div className=' '>
      <div className='mb-4 flex justify-between gap-4 items-center'>
        <h1 className='  text-lg xl:text-2xl font-bold uppercase '>
          {formulaireIntl('titleOne')} - <span className='text-primary'>{formulaireIntl('titleTwo')}</span>
        </h1>
        <button  onClick={() => setIsPreviewModalOpen(true)} className='btn flex items-center rounded-md btn-primary'>
          <p className='text-sm'>{formulaireIntl('preview')}</p> <Eye className='w-4' />
        </button>
      </div>
      <div className='flex flex-col gap-6 rounded-lg'>
        <div className='flex flex-col mt-4 space-y-4 gap-2'>
          <div className='flex  justify-between items-center'>
            <h1 className='badge badge-lg badge-primary badge-outline '>
              {formulaireIntl('question')}
            </h1>
            <button
              onClick={handlePersonalDetails}
              className='btn flex btn-sm items-center rounded-md btn-primary'>
              <RotateCcw className='w-4' />
            </button>
          </div>

          <PersonalDetailForm
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            setFile={setFile}
            file={file}
          />

          <div className='flex  justify-between items-center'>
            <h1 className='badge badge-lg badge-primary badge-outline '>
              {formulaireIntl('experience')}
            </h1>
            <button
              onClick={handleResetExperience}
              className='btn flex btn-sm items-center rounded-md btn-primary'>
              <RotateCcw className='w-4' />
            </button>
          </div>

          <div className=''>
            <ExperienceForm
              experiences={experiences}
              setExperiences={setExperiences}
            />
          </div>

          <div className='flex  justify-between items-center'>
            <h1 className='badge badge-lg badge-primary badge-outline '>
              {formulaireIntl('education')}
            </h1>
            <button
              onClick={handleResetEducation}
              className='btn flex btn-sm items-center rounded-md btn-primary'>
              <RotateCcw className='w-4' />
            </button>
          </div>
          <div className=''>
            <EducationForm
              educations={educations}
              setEducations={setEducations}
            />
          </div>

          <div className='flex  justify-between items-center'>
            <h1 className='badge badge-lg badge-primary badge-outline '>
              {formulaireIntl('languages')}
            </h1>
            <button
              onClick={handleResetLanguage}
              className='btn flex btn-sm items-center rounded-md btn-primary'>
              <RotateCcw className='w-4' />
            </button>
          </div>
          <div className=''>
            <LanguageForm languages={languages} setLanguages={setLanguages} />
          </div>

          <div className='flex justify-between gap-4'>
            <div className='w-1/2'>
              <div className='flex  justify-between items-center'>
                <h1 className='badge badge-lg badge-primary badge-outline '>
                  {formulaireIntl('skills')}
                </h1>
                <button
                  onClick={handleResetSkills}
                  className='btn flex btn-sm items-center rounded-md btn-primary'>
                  <RotateCcw className='w-4' />
                </button>
              </div>
              <div className="mt-6">
                <SkillsForm skills={skills} setSkills={setSkills} />
              </div>
            </div>


              <div className='w-1/2'>
              <div className='flex  justify-between items-center'>
                <h1 className='badge badge-lg badge-primary badge-outline '>
                  {formulaireIntl('hobbies')}
                </h1>
                <button
                  onClick={handleResetHobbies}
                  className='btn flex btn-sm items-center rounded-md btn-primary'>
                  <RotateCcw className='w-4' />
                </button>
              </div>
               <div className="mt-6">
                <HobbyForm hobbies={hobbies} setHobbies={setHobbies} />
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;
