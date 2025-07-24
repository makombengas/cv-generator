import {
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from '@/type';
import { forwardRef } from 'react';
import { Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Resume from '../resume/Resume';

interface PreviewModalProps {
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
}

const PreviewModal = forwardRef<HTMLDivElement, PreviewModalProps>(({
  personalDetails,
  file,
  theme,
  experiences = [],
  educations = [],
  languages = [],
  skills = [],
  hobbies = [],
  isPreviewModalOpen,
  setIsPreviewModalOpen,
  handleDownloadPdf,
  setFile
}, ref) => {
  const downloadIntl = useTranslations('Download');

  if (!isPreviewModalOpen) return null;

  return (
    <dialog
      open={isPreviewModalOpen}
      className={`fixed inset-0 z-50 w-full h-full bg-[url("/images/resume/resumeBackground.svg")] bg-cover flex justify-center items-center p-0`}
    >
      <div className='w-full max-w-6xl mx-auto flex flex-col justify-center items-center'>
        <div className='mb-10 flex justify-between items-center max-w-[950px] w-full relative'>
          <button 
            onClick={handleDownloadPdf} 
            className='btn btn-sm btn-primary flex items-center rounded-md'
          >
            {downloadIntl('download')} <Download className='w-4 ml-2' />
          </button>
          <button
            onClick={() => setIsPreviewModalOpen(false)}
            className='btn btn-sm btn-circle bg-primary text-white'
          >
            ✕
          </button>
        </div>

        <div className='h-[80vh] overflow-y-auto w-full'>
          <div className="flex justify-center">
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
});

PreviewModal.displayName = 'PreviewModal';

export default PreviewModal;