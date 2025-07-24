import {
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from '@/type';
import Resume from '../resume/Resume';
import { FC } from 'react';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';

type ResumeProps = {
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
  handleDownloadPdf: () => void;
   ref: React.RefObject<HTMLDivElement>;
 
};

const PreviewModal: FC<ResumeProps> = ({
  personalDetails,
  file,
  theme,
  experiences,
  setFile,
  educations,
  languages,
  skills,
  hobbies,
  isPreviewModalOpen,
  setIsPreviewModalOpen,
  handleDownloadPdf,
 ref

    

}) => {
  const downloadIntl = useTranslations('Download');
  return (
    <dialog
      open={isPreviewModalOpen}
    
      className={`${
        isPreviewModalOpen
          ? 'scrollable-preview card  fixed top-0 left-0 z-5 w-full h-full bg-[url("/images/resume/resumeBackground.svg")] flex justify-center items-center'
          : ''
      } ${isPreviewModalOpen ? ' right-0 bottom-0' : ''}  `}>
      <div className=' w-full  max-w-6xl mx-auto flex flex-col justify-center items-center'>
        <div className='mb-10 flex justify-between items-center  max-w-[950px] w-full relative'>
          {/* if ere is a button in form, it will close the modal */}
          <button onClick={handleDownloadPdf} className='btn flex btn-sm items-center rounded-md btn-primary'>
            {downloadIntl('download')} <Download className='w-4' />
          </button>
          <button
            onClick={() => setIsPreviewModalOpen(false)}
            className='bg-primary text-white z-50 btn btn-sm btn-circle  '>
            ✕
          </button>
        </div>

        <div className=' h-[80vh] overflow-y-scroll '>
          <div className="">
            <Resume
            personalDetails={personalDetails}
            file={file}
            theme={theme}
            experiences={experiences}
            educations={educations}
            setFile={setFile}
            languages={languages}
            skills={skills}
            hobbies={hobbies}
            isPreviewModalOpen={isPreviewModalOpen}
            setIsPreviewModalOpen={setIsPreviewModalOpen}
            download={true}
            ref={ref}
          />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default PreviewModal;
