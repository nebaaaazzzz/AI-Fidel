import { useTranslation } from 'react-i18next';

function PlaceYourHand({
  isMediaPipeModelLoading,
  isGameStarted
}: {
  isMediaPipeModelLoading: boolean;
  isGameStarted: boolean;
}) {
  const { t } = useTranslation();
  if (!isMediaPipeModelLoading && !isGameStarted) {
    return (
      <div
        style={{
          background: 'rgba(46, 46, 46, 0.74)',
          backdropFilter: 'blur(6.5px)',
          borderRadius: '10px'
        }}
        className="absolute z-10 flex w-2/3 aspect-[5/2] md:w-6/12  top-0 bottom-0 left-0 right-0 m-auto items-center gap-5 justify-center flex-col"
      >
        <div>
          <h1 className="text-center text-white text-2xl">{t('pyh')}</h1>
          <h1 className="text-center text-white text-2xl">{t('vots')}</h1>
        </div>
        <p className="text-white">{t('tgs')}</p>
      </div>
    );
  }
  return null;
}

export default PlaceYourHand;
