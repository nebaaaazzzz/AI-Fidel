import LevelComplete from './ParentScoreBoard';
import stars from '@assets/icons/starts.png';
import { useTranslation } from 'react-i18next';


const FinalScoreBoards = () => {
  const { t } = useTranslation();
  return (
        <LevelComplete>
          <div className='flex pt-2 pb-6 flex-col gap-2 md:gap-6 justify-around '>
              <div className='flex justify-between gap-8'>
                <div className='rounded-full hidden md:block bg-[#F8B936] h-[50px] w-[50px]' />
                <div className='w-full md:w-[90%] bg-[#008867] border-4 flex justify-between items-center px-0 pl-2 md:px-8 flex-row border-[#05C294] h-[50px] rounded-lg'>
                    <p className=' uppercase font-bold'>level 1</p>
                    <div className='bg-[#0D0D0D] opacity-75 text-[#F8B936] font-bold mr-8 cml:mr-20 w-[50%] text-center rounded-md'>85%</div>
                </div>
              </div>
              
              <div className='flex justify-between gap-8'>
                <div className='rounded-full hidden md:block bg-[#F8B936] h-[50px] w-[50px]' />
                <div className='w-full md:w-[90%] bg-[#008867] border-4 flex justify-between items-center px-0 pl-2 md:px-8 flex-row border-[#05C294] h-[50px] rounded-lg'>
                    <p className=' uppercase font-bold'>level 2</p>
                    <div className='bg-[#0D0D0D] opacity-75 text-[#F8B936] font-bold mr-8 cml:mr-20 w-[50%] text-center rounded-md'>100%</div>
                </div>
              </div>
              <div className='flex justify-between gap-8'>
                <div className='rounded-full hidden md:block bg-[#B6B6B6] border-4 border-bg-[#9F9F9F] h-[50px] w-[50px]' />
                <div className='w-full md:w-[90%] bg-[#5B5B5B] border-4 flex justify-between items-center px-0 pl-2 md:px-8 flex-row border-[#A7A7A7] h-[50px] rounded-lg'>
                    <p className=' uppercase font-bold'>level 3</p>
                    <div className='bg-[#0D0D0D] opacity-75 text-[#F8B936] font-bold mr-8 cml:mr-20 w-[50%] text-center rounded-md'>0%</div>
                </div>
              </div>
              
              <div className='flex justify-between gap-8'>
                <div className='rounded-full hidden md:block bg-[#B6B6B6] border-4 border-bg-[#9F9F9F] h-[50px] w-[50px]' />
                <div className='w-full md:w-[90%] bg-[#5B5B5B] border-4 flex justify-between items-center px-0 pl-2 md:px-8 flex-row border-[#A7A7A7] h-[50px] rounded-lg'>
                    <p className=' uppercase font-bold'>level 4</p>
                    <div className='bg-[#0D0D0D] opacity-75 text-[#F8B936] font-bold mr-8 cml:mr-20 w-[50%] text-center rounded-md'>0%</div>
                </div>
              </div>
          </div>

        </LevelComplete>
  );
};

export default FinalScoreBoards;
