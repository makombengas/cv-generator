import Image from "next/image";

const StartPageInfos = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-3xl font-bold flex flex-col'>
            <span className='text-primary'>Entschuldigung!</span> Der Lebenslauf-Generator ist nur auf dem Desktop verfügbar.
          </h1>
          <Image
            className='mx-auto  object-cover max-w-70 '
            src='/images/startPageInfos/sorry.gif'
            priority
            alt='computer'
            width={300}
            height={300}
          />
          <p className='pt-6'>
          Verwenden Sie zum Erstellen und Anpassen Ihres Lebenslaufs bitte einen Computer.
          </p>
          <p className='py-2 italic'>
            Vielen Dank für Ihr Verständnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPageInfos;
