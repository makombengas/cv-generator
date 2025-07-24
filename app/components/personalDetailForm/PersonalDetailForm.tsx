import { PersonalDetails } from '@/type';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useRef } from 'react';

type PersonalDetailsProps = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
  file: File | null
  
};

const inputStyle = 'input input-bordered w-full ';
  const inputTextareaStyle = 'textarea min-h-50 textarea-bordered w-full '
const PersonalDetailForm: FC<PersonalDetailsProps> = ({
  personalDetails,
  setPersonalDetails,
  setFile,
  file
}) => {
   const fileInputRef = useRef<HTMLInputElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof PersonalDetails
  ) => {
    setPersonalDetails({
      ...personalDetails,
      [field]: e.target.value,
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
   
    const handleCardClick = () => {
    fileInputRef.current?.click();
  };
  const downloadIntl = useTranslations('Download');
  return (
    <div className='flex flex-col space-y-2 gap-4'>
      <input
        onChange={(e) => handleChange(e, 'fullName')}
        type='text'
        placeholder='Vollständiger Name'
        value={personalDetails.fullName}
        className={inputStyle}
      />

      <div className='flex gap-4'>
        <input
          onChange={(e) => handleChange(e, 'email')}
          type='email'
          placeholder='Email'
          value={personalDetails.email}
          className={inputStyle}
        />

        <input
          onChange={(e) => handleChange(e, 'phone')}
          type='text'
          placeholder='Telefonnummer'
          value={personalDetails.phone}
          className={inputStyle}
        />
      </div>
      <input
        onChange={(e) => handleChange(e, 'address')}
        type='text'
        placeholder='Anschrift'
        value={personalDetails.address}
        className={inputStyle}
      />
       <div className="flex flex-col items-center gap-4">
      {/* Carte pour uploader un fichier */}
      <div
        onClick={handleCardClick}
        className="w-64 p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <span className="text-gray-600 font-medium">
          {downloadIntl('choose')}
        </span>
       

        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>

      {/* Indicateur de fichier sélectionné */}
      <div className="text-sm text-gray-500">
        {file ? file.name : "No file chosen"}
      </div>

      {/* Aperçu de l'image */}
      {file && (
        <div className="opacity-100 transition-opacity duration-500 ease-in-out w-full p-4 rounded flex items-center justify-center">
          <div className="relative w-32 h-32">
            <Image
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="rounded-full object-cover border-2 border-primary"
              fill
              style={{ objectPosition: 'top center' }}
            />
          </div>
        </div>
      )}
    </div>
      <input
        onChange={(e) => handleChange(e, 'postSeeking')}
        type='text'
        placeholder='Beitrag gesucht'
        value={personalDetails.postSeeking}
        className={inputStyle}
      />

      <textarea
        onChange={(e) => handleChange(e, 'description')}
        placeholder='Beschreibung'
        value={personalDetails.description}
        className={inputTextareaStyle}
      />

      
    </div>
  );
};

export default PersonalDetailForm;
