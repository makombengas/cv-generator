'use client';
import {
  educationsPreset,
  experiencesPreset,
  hobbiesPreset,
  languagesPreset,
  personalDetailsPreset,
  skillsPreset,
} from '@/presets';
import Formulaire from '../components/formulaire/Formulaire';
import Resume from '../components/resume/Resume';
import StartPageInfos from '../components/startPageInfos/StartPageInfos';
import {
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from '@/type';
import { useRef, useState } from 'react';
import PreviewModal from '../components/previewModal/PreviewModal';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';
import confetti from 'canvas-confetti';
import LocaleSwitcher from '../components/localeSwitcher/LocaleSwitcher';

 function Home() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    personalDetailsPreset
  );
  const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [zoom, setZoom] = useState<number>(125);
  const [experiences, setExperiences] = useState<Experience[]>(experiencesPreset);
  const [éducations, setEducations] = useState<Education[]>(educationsPreset);
  const [languages, setLanguages] = useState<Language[]>(languagesPreset);
  const [skills, setSkills] = useState<Skill[]>(skillsPreset);
  const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);

  // SOLUTION 1: Créer deux refs séparées
 const cvPreviewRef = useRef<HTMLDivElement>(null);
const modalPreviewRef = useRef<HTMLDivElement>(null);

  const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
    'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
    'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
    'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
    'night', 'coffee', 'winter', 'dim', 'nord', 'sunset',
  ];

  const handlePersonalDetails = () =>
    setPersonalDetails({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      photoUrl: '',
      postSeeking: '',
      description: '',
    });

  const handleResetExperience = () => setExperiences([]);
  const handleResetEducation = () => setEducations([]);
  const handleResetLanguages = () => setLanguages([]);
  const handleResetSkills = () => setSkills([]);
  const handleResetHobbies = () => setHobbies([]);

  // SOLUTION 2: Modifier la fonction pour utiliser la ref du modal quand c'est ouvert
  const handleDownloadPdf = async () => {
    // Utiliser modalPreviewRef quand le modal est ouvert, sinon cvPreviewRef
    const element = isPreviewModalOpen ? modalPreviewRef.current : cvPreviewRef.current;
    
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'A4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 0, 0, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');
        setIsPreviewModalOpen(false);
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 9999
        });
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    }
  };

  return (
    <div className=''>
      <div className='hidden lg:block '>
        <section className='flex items-center h-screen justify-between'>
          <div className='w-1/3 h-full scrollable no-scrollbar p-10 bg-base-200'>
            <Formulaire
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
              setFile={setFile}
              file={file as null}
              handlePersonalDetails={handlePersonalDetails}
              experiences={experiences}
              setExperiences={setExperiences}
              handleResetExperience={handleResetExperience}
              handleResetEducation={handleResetEducation}
              educations={éducations}
              setEducations={setEducations}
              setLanguages={setLanguages}
              handleResetLanguage={handleResetLanguages}
              languages={languages}
              handleResetSkills={handleResetSkills}
              skills={skills}
              setSkills={setSkills}
              hobbies={hobbies}
              setHobbies={setHobbies}
              handleResetHobbies={handleResetHobbies}
              isPreviewModalOpen={isPreviewModalOpen}
              setIsPreviewModalOpen={setIsPreviewModalOpen}
            />
          </div>

          <div className='relative w-2/3 bg-center h-full p-10 bg-cover bg-base-100 bg-[url("/images/resume/resumeBackground.svg")] scrollable-preview'>
            <div className='flex items-center justify-center fixed z-999 bottom-5 right-16'>
              <input
                type='range'
                min={50}
                max={200}
                value={zoom}
                className={`range range-primary range-xs`}
                onChange={(e) => setZoom(Number(e.target.value))}
              />
              <p className='text-sm ml-4 text-primary'>{zoom}%</p>
            </div>

         <div className="z-50">
          <LocaleSwitcher />
             <select
              data-theme={theme}
              value={theme}
              className='w-1/16 select select-bordered fixed z-999 select-sm top-14 right-16'
              onChange={(e) => setTheme(e.target.value)}>
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
         </div>
            
            <div
              className='flex justify-center items-center'
              style={{ zoom: `${zoom}%`, transform: `scale(${zoom / 200})` }}>
              <Resume
                personalDetails={personalDetails}
                file={file}
                theme={theme}
                experiences={experiences}
                educations={éducations}
                setFile={setFile}
                languages={languages}
                skills={skills}
                hobbies={hobbies}
                isPreviewModalOpen={isPreviewModalOpen}
                setIsPreviewModalOpen={setIsPreviewModalOpen}
                download={true}
                 
                ref={cvPreviewRef} // Utiliser la première ref
              />
            </div>
          </div>
        </section>
        
        <PreviewModal
          personalDetails={personalDetails}
          file={file}
          theme={theme}
          experiences={experiences}
          educations={éducations}
          languages={languages}
          setFile={setFile}
          skills={skills}
          hobbies={hobbies}
          isPreviewModalOpen={isPreviewModalOpen}
          setIsPreviewModalOpen={setIsPreviewModalOpen}
          handleDownloadPdf={handleDownloadPdf}
          ref={modalPreviewRef} // Utiliser la deuxième ref
        />
      </div>
      
      <div className='lg:hidden block'>
        <StartPageInfos />
      </div>
    </div>
  );
}

export default Home