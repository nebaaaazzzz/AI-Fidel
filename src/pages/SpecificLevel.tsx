import star from '@assets/icons/star.png';
import profile from '@assets/icons/profile.png';
import { useTranslation } from 'react-i18next';

export const SpecificLevel = () => {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center relative">
      <button className="bg-[#2E2E2E] shadow-[0px_2px_16px_rgba(255,175,82,0.8)] py-1 px-2 rounded-full h-24 w-24 flex items-center justify-center absolute  top-0">
        <img src={profile} className="" />
      </button>
      <div className="w-1/2 mt-4 rounded-md">
        <div className="w-full bg-gradient-to-r from-[#D97500A3] to-[#008867] p-1 rounded-md  mt-[2rem] ">
          <div className="flex flex-col gap-4  items-center bg-[#2E2E2E]">
            <button className="bg-[#F8B936]  rounded-md  text-[#2E2E2E] font-bold  w-[65%] outline-2 outline outline-dashed outline-offset-2  outline-[#FFF] p-1 mt-16">
              Guest2112
            </button>
            <div className="flex  ml-6">
              <div>
                <img src={star} className=" w-1/2" />
              </div>
              <div>
                <img src={star} className=" w-1/2" />
              </div>
              <div>
                <img src={star} className=" w-1/2" />
              </div>
              <div>
                <img src={star} className=" w-1/2" />
              </div>
            </div>
            <div className=" w-[75%] border-[5px] border-[#05C294] bg-[#008867] rounded-md p-1">
              <h1 className="text-center  text-[2rem] text-[#fff] font-bold">
                {t('s')}
              </h1>
              <div className="bg-[#0D0D0DBA] bg-opacity-73 rounded-md w-[90%] mx-auto">
                <h1 className="text-center  text-[2.2rem] text-[#F8B936] font-bold">
                  98%
                </h1>
              </div>
            </div>
            <button className="btn bg-[#5E5E5E] text-[1.5rem]  rounded-[12px]  text-[#FFF]  w-[75%] font-bold">
              {t('l')} 1
            </button>
            <button className="btn bg-[#F8B936] text-[1.5rem]  rounded-[12px]  text-[#FFF]  w-[75%] font-bold  border-[#FAFF00] border-4 shadow-[0px_2px_12px_rgba(250,255,0,0.5)]  mb-10">
              {t('sh')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
