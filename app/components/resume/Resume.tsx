'use client';

import {
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from '@/type';
import {
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPinCheckInside,
  Phone,
  Star,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { forwardRef, useEffect } from 'react';

interface ResumeProps {
  personalDetails: PersonalDetails;
  file?: File | null;
  theme?: string;
  experiences?: Experience[];
  educations?: Education[];
  languages?: Language[];
  setFile: (file: File | null) => void;
  skills?: Skill[];
  hobbies?: Hobby[];
  isPreviewModalOpen: boolean;
  setIsPreviewModalOpen: (isOpen: boolean) => void;
  download: boolean;
}

const Resume = forwardRef<HTMLDivElement, ResumeProps>(({
  personalDetails,
  file,
  theme,
  experiences = [],
  educations = [],
  languages = [],
  skills = [],
  hobbies = [],
  download,
  setFile,
 
}, ref) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('fr-FR', options);
  }

  useEffect(() => {
    const defaultImageUrl = '/images/personalDetails/photo.jpg';

    fetch(defaultImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], 'photo.jpg', {
          type: blob.type,
        });
        setFile(file);
      })
      .catch(error => {
        console.error('Error loading default image:', error);
      });
  }, [setFile]);

  const getStarRating = (proficiency: string) => {
    const maxStars = 5;
    let filledStars = 0;

    switch (proficiency) {
      case 'Anfänger':
        filledStars = 1;
        break;
      case 'Mittelstufe':
        filledStars = 3;
        break;
      case 'Fortgeschritten':
        filledStars = 5;
        break;
      default:
        filledStars = 0;
    }
    return (
      <>
        {Array.from({ length: filledStars }, (_, index) => (
          <Star key={index} className={`w-4 text-primary`} />
        ))}
        {Array.from({ length: maxStars - filledStars }, (_, index) => (
          <Star key={index + filledStars} className='w-4 text-gray-300' />
        ))}
      </>
    );
  };

  const formulaireIntl = useTranslations('Form');

  return (
    <div
      ref={ref}
      className={`flex p-16 w-[950px] h-[1250px] shadow-lg ${download ? 'mb-10' : ''}`}
      data-theme={theme}
    >
      <div className='flex flex-col w-1/3'>
        <div className='ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full border-8 border-primary overflow-hidden h-80'>
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              width={500}
              height={500}
              alt='Picture of the author'
              className='w-full object-cover h-full rounded-lg'
              onLoad={() => {
                if (typeof file !== 'string') {
                  URL.revokeObjectURL(URL.createObjectURL(file));
                }
              }}
            />
          )}
        </div>

        <div className='mt-4 flex flex-col w-full'>
          {/* Contact */}
          <div>
            <h1 className='uppercase text-2xl font-bold my-4'>
              {formulaireIntl('contact')}
            </h1>
            <ul className='space-y-4'>
              <li className='flex'>
                <div className='break-all text-sm relative'>
                  <div className='ml-8'>{personalDetails.phone}</div>
                  {personalDetails.phone && (
                    <div className='absolute top-0 left-0'>
                      <Phone className='w-5 text-primary' />
                    </div>
                  )}
                </div>
              </li>

              <li className='flex'>
                <div className='break-all text-sm relative'>
                  <div className='ml-8'>{personalDetails.email}</div>
                  {personalDetails.email && (
                    <div className='absolute top-0 left-0'>
                      <Mail className='w-5 text-primary' />
                    </div>
                  )}
                </div>
              </li>

              <li className='flex'>
                <div className='break-all text-sm relative'>
                  <div className='ml-8'>{personalDetails.address}</div>
                  {personalDetails.address && (
                    <div className='absolute top-0 left-0'>
                      <MapPinCheckInside className='w-5 text-primary' />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h1 className='uppercase text-2xl font-bold my-4'>
              {formulaireIntl('skills')}
            </h1>
            <div className='flex max-w-[180px] flex-wrap gap-2'>
              {skills.map((skill) => (
                <div key={skill.id} className='flex items-center gap-2'>
                  <div aria-label="status" className="status status-primary"/>
                  <span className='capitalize font-semibold'>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h1 className='uppercase text-2xl font-bold my-4'>
              {formulaireIntl('hobbies')}
            </h1>
            <div className='flex w-full flex-wrap gap-2'>
              {hobbies.map((hobby) => (
                <div key={hobby.id} className='flex items-center gap-2'>
                  <div aria-label="status" className="status status-primary"/>
                  <span className='capitalize font-semibold'>
                    {hobby.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h1 className='uppercase text-2xl font-bold my-4'>
              {formulaireIntl('languages')}
            </h1>
            <div className='flex max-w-[180px] flex-col gap-2'>
              {languages.map((lang) => (
                <div key={lang.id} className='flex items-center gap-2'>
                  <div aria-label="status" className="status status-primary"/>
                  <span className='capitalize font-semibold'>
                    {lang.language}
                  </span>
                  <div className='flex items-center ml-auto'>
                    {getStarRating(lang.proficiency)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-2/3 ml-8'>
        <div className='w-full flex flex-col space-y-4'>
          <h1 className='uppercase text-3xl font-bold'>
            {personalDetails.fullName}
          </h1>
          <h2 className='uppercase text-4xl text-primary font-bold'>
            {personalDetails.postSeeking}
          </h2>
          <p className='text-base text-justify break-all w-full'>
            {personalDetails.description}
          </p>
        </div>

        {/* Experience Section */}
        <section className='w-full h-fit mt-6'>
          <div>
            <h2 className='uppercase text-2xl font-bold mb-4'>
              {formulaireIntl('experience')}
            </h2>
            <ul className='space-y-6'>
              {experiences.map((experience, index) => (
                <li key={index} className='relative pl-8'>
                  <div className='absolute left-0 top-[.5rem] w-4 h-4 rounded-full bg-primary'></div>
                  {index < experiences.length - 1 && (
                    <div className='absolute left-[7px] top-5 bottom-[-1.5rem] w-0.5 bg-primary'></div>
                  )}
                  <div className='flex flex-col'>
                    <p className='text-lg text-gray-600'>
                      {formatDate(experience.startDate)} -{' '}
                      {experience.endDate
                        ? formatDate(experience.endDate)
                        : 'Heute'}
                    </p>
                    <div className='flex items-center gap-2'>
                      <BriefcaseBusiness className='w-5' />
                      <h3 className='text-lg font-bold'>
                        {experience.jobTitle}
                      </h3>
                    </div>
                    <p className='text-lg uppercase'>
                      {experience.companyName}
                    </p>
                    <p className=''>{experience.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className='w-full h-fit mt-6'>
          <div>
            <h2 className='uppercase text-2xl font-bold mb-4'>
              {formulaireIntl('education')}
            </h2>
            <ul className='space-y-6'>
              {educations.map((education, index) => (
                <li key={index} className='relative pl-8'>
                  <div className='absolute left-0 top-[.5rem] w-4 h-4 rounded-full bg-primary'></div>
                  {index < educations.length - 1 && (
                    <div className='absolute left-[7px] top-5 bottom-[-1.5rem] w-0.5 bg-primary'></div>
                  )}
                  <div className='flex flex-col'>
                    <p className='text-lg text-gray-600'>
                      {formatDate(education.startDate)} -{' '}
                      {education.endDate
                        ? formatDate(education.endDate)
                        : 'Heute'}
                    </p>
                    <div className='flex items-center gap-2'>
                      <GraduationCap className='w-5' />
                      <h3 className='text-lg font-bold'>
                        {education.degree}
                      </h3>
                    </div>
                    <p className='text-lg uppercase'>{education.school}</p>
                    <p className=''>{education.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
});

Resume.displayName = 'Resume';

export default Resume;