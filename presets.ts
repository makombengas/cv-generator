import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '@/type';

export const personalDetailsPreset: PersonalDetails = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    address: '123, Avenue Example, Paris, France',
    photoUrl: '/images/personalDetails/profile.jpg',
    postSeeking:'Développeur Frontend & Web Designer',
    description:'Développeur web passionné, je possède une solide expérience en design UX/UI, en création de contenus numériques et en développement frontend et backend avec des technologies comme React, Next.js, Node.js et WordPress. Créatif et rigoureux, je sais allier sens esthétique, compétences techniques et approche centrée utilisateur. Curieux, autonome et orienté solution, je m’investis pleinement dans les projets pour créer des expériences web modernes, accessibles et efficaces.'
    
};

export const experiencesPreset: Experience[] = [
    {
        id: 'uuid-1',
        jobTitle: 'Développeur Web',
        companyName: 'Tech Solutions',
        startDate: '2022-01-01',
        endDate: '2023-01-01',
        description: 'Développement d\'applications web en utilisant React et Node.js.'
    },
    {
        id: 'uuid-2',
        jobTitle: 'Chef de projet',
        companyName: 'Innovatech',
        startDate: '2020-06-01',
        endDate: '2022-01-01',
        description: 'Gestion de projets techniques, coordination des équipes de développement.'
    }
];

export const educationsPreset: Education[] = [
    {
        id: 'uuid-3',
        degree: 'Master en Informatique',
        school: 'Edu',
        startDate: '2015-09-01',
        endDate: '2018-06-01',
        description: 'Spécialisation en développement web et bases de données.'
    },
    {
        id: 'uuid-4',
        degree: 'Certifié en Informatique',
        school: 'Cefti Cameroun',
        startDate: '1999-09-01',
        endDate: '21993-06-01',
        description: 'Spécialisation en développement web et bases de données.'
    }
];

export const skillsPreset: Skill[] = [
    { id: 'uuid-4', name: 'React.js' },
    { id: 'uuid-5', name: 'Node.js' }
];

export const languagesPreset: Language[] = [
    { id: 'uuid-6', language: 'Anglais', proficiency: 'Fortgeschritten' },
    { id: 'uuid-7', language: 'Français', proficiency: 'Anfänger' }
];

export const hobbiesPreset: Hobby[] = [
    { id: 'uuid-8', name: 'Voyager' },
    { id: 'uuid-9', name: 'Lire des livres' }
];