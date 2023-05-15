import profile from '@assets/icons/profile.png';
import { RxInstagramLogo } from 'react-icons/rx';
import { RiFacebookFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import EthiopiaIcon from '@assets/icons/ethiopia-icon.png';
import UKIcon from '@assets/icons/uk-icon.png';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';
import { langAtom } from '../store/store'
import { useState } from 'react';
import { TiTick } from 'react-icons/ti'

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useAtom(langAtom)
  const [amharic, setAmharic] = useState(false)
  const [english, setEnglish] = useState(true)
  const changeLangtoAmh =  () => {
    i18n.changeLanguage('am');
    setLang('am')
    localStorage.setItem('language', 'am');
    setAmharic(true)
    setEnglish(false)
    return;
  }
  const changeLangtoEng =  () => {
    i18n.changeLanguage('en');
    setLang('en')
    setEnglish(true)
    setAmharic(false)
    localStorage.setItem('language', 'en');
    return;
  }
  return (
    <div className="m-8 md:m-0">
    <div className="profile-glass flex items-center justify-between space px-8 pt-6 rounded-md  mb-8">
      <div></div>
      <div className="">
        <button className="bg-[#2E2E2E] shadow-[0px_2px_20px_rgba(255,175,82,1)] py-2 px-2 ml-7 rounded-full h-36 w-36 flex items-center justify-center">
          <img src={profile} className=" w-11/12" />
        </button>
        <div className="mt-6 text-center mb-1">
          <h1 className="text-center text-[#FFF] font-bold text-lg px-6 ml-5">
            Ablaze Labs
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div>
          <RxInstagramLogo />
        </div>
        <div>
          <SiTwitter />
        </div>
        <div className=" mb-4">
          <RiFacebookFill />
        </div>
      </div>
    </div>
    <div className="">
      <div className="flex flex-col gap-5">
          <div className="bg-[#2E2E2E] rounded-md flex  py-2 px-5 justify-center cursor-pointer" onClick={changeLangtoAmh}>
            <div className='flex'>
                {
                    amharic ? <TiTick className='text-[#008867]  mt-1' /> : null
                }
                <img src={EthiopiaIcon} className=' w-6 ml-2' />
              <h1 className="text-[#FFF]  ml-6">አማርኛ</h1>
            </div>
          </div>
        <div
          className=" bg-[#2E2E2E] rounded-md flex py-2 px-5 justify-center cursor-pointer" onClick={changeLangtoEng}>
          <div className="flex ml-2">
          {
                    english ? <TiTick className='text-[#008867] mt-1' /> : null
                }
          <img src={UKIcon} className='w-5 ml-2' />
            <h1 className="text-[#FFF] ml-6">English</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
