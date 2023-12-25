import LinkwithQuery from '@/components/LinkwithQuery';
import pointhand from '@assets/images/pointinghand.png';
import { useTranslation } from 'react-i18next';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
function StartLevel() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col items-center gap-5">
        <button className="btn btn-accent rounded-md w-full flex justify-between">
          <div> </div>
          <p>{t('level')} 1</p>
          <MdKeyboardArrowDown size={20} />
        </button>
        <img className="object-contain w-40" src={pointhand} />
        <p className="">{t('sltl')}</p>
        <div className="flex gap-2 md:gap-4 lg:gap-8">
          {['ሀ', 'ሰ', 'ነ', 'ነ', 'ኘ', 'የ', 'ተ'].map((letter, i) => {
            return (
              <p
                key={i}
                style={{
                  background: '#2E2E2E',
                  boxShadow: '0px 2px 26px rgba(0, 0, 0, 0.08)',
                  borderRadius: '6px',
                }}
                className="w-10 md:w-14 aspect-square flex items-center justify-center text-white text-2xl"
              >
                {letter}
              </p>
            );
          })}
        </div>
        <LinkwithQuery query={''} path={'/game'} ref={null}>
          <div></div>
          <p>{t('toc')}</p>
          <AiOutlineCamera size={20} color="white" />
        </LinkwithQuery>
      </div>
    </div>
  );
}
export default StartLevel;
