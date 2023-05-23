import appIcon from '@assets/icons/app-icon.png';
import checklistIcon from '@assets/icons/checklist-icon.png';
import editIcon from '@assets/icons/edit-icon.png';
import trophyIcon from '@assets/icons/trophy-icon.png';
import famecontrollerIcon from '@assets/icons/gamecontroller-icon.png';
import { Link } from 'react-router-dom';
import { handAtom } from '../store/store'
import { langAtom } from '../store/store'
import { useAtom } from 'jotai';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

function LeftSideBar() {
  const [lang] = useAtom(langAtom);
  const [hand] = useAtom(handAtom);
  const user = useContext(AuthContext);
  const location = useLocation()

  const url = ['']

  const active = '#F8B936'
  const notActive = '#FFFFFF'
  const widthHeight = '24'

  let selected = null

  if (Boolean(location.search.match(/learn/))) {
    selected = 'learn'
  } else if (Boolean(location.search.match(/game/))) {
    selected = 'game'
  } else if (Boolean(location.pathname.match(/edit-profile/)) || Boolean(location.pathname.match(/profile/)) || Boolean(location.pathname.match(/change-language/))) {
    selected = 'profile'
  } else {
    selected = 'home'
  }

  const home = <svg width={widthHeight} height={widthHeight} viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="17.9301" height="17.4247" rx="4.40332" fill={selected === 'home' ? active : notActive}/>
                  <rect y="22.8696" width="17.9301" height="17.4247" rx="4.40332" fill={selected === 'home' ? active : notActive}/>
                  <rect x="23.2031" width="17.9301" height="17.4247" rx="4.40332" fill={selected === 'home' ? active : notActive}/>
                  <rect x="23.2031" y="22.8696" width="17.9301" height="17.4247" rx="4.40332" fill={selected === 'home' ? active : notActive}/>
                </svg>

const tasks = <svg className='relative left-[0px] bottom-[-2px] md:left-[-4px] md:bottom-[-2px]' width={parseInt(widthHeight) + 8} height={parseInt(widthHeight) + 8} version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g>
 <path fill={selected === 'learn' ? active : notActive} d="m503.27 70.559h-52.641c-6.7188-8.1758-16.688-13.441-28.113-13.441h-12.434c-5.7109-26.543-29.008-45.922-57.121-45.922-28 0-51.297 19.375-57.008 45.922h-12.547c-11.312 0-21.391 5.2656-28.109 13.441h-58.574c-30.352 0-54.992 24.641-54.992 54.992v368.14c0 30.352 24.641 55.105 54.992 55.105h306.54c30.352 0 54.992-24.754 54.992-55.105l0.003907-368.14c0.003906-30.352-24.637-54.992-54.992-54.992zm-233.96 22.961c0-7.7305 6.3828-14 14.109-14h22.398c6.0469 0 10.977-4.8164 11.199-10.863 0.67578-19.711 16.469-35.055 35.957-35.055 19.602 0 35.391 15.344 36.062 35.055 0.22266 6.0469 5.1523 10.863 11.199 10.863h22.289c7.7266 0 14.113 6.2695 14.113 14v28.781l-167.33 0.003907zm-2.4648 51.184h172.26c6.0469 0 11.312-2.6875 15.008-6.9414h36.961l-0.003906 343.73h-201.15v-61.824c0-6.1602-5.0391-11.199-11.199-11.199h-69.777l0.003906-270.7h42.895c3.6953 4.2539 8.9609 6.9414 15.008 6.9414zm0.67188 286.16v36.734l-15.457-14-25.199-22.734zm268.35 62.832c0 18.031-14.559 32.703-32.594 32.703h-306.54c-18.031 0-32.594-14.672-32.594-32.703l0.003907-368.14c0-17.922 14.559-32.59 32.594-32.59h50.289c0 0.22266-0.10938 0.33594-0.10938 0.55859l-0.003906 21.84h-49.168c-6.1602 0-11.199 5.0391-11.199 11.199v293.11c0 0.22266 0.11328 0.44922 0.11328 0.67188 0.11328 1.1172 0.33594 2.2383 0.67188 3.2461 0.22266 0.33594 0.33594 0.67188 0.44922 1.1211 0.67187 1.1211 1.3438 2.3516 2.4648 3.2461v0.11328l80.977 73.023c1.0078 0.89453 2.2383 1.5664 3.4727 2.125 1.3438 0.44922 2.6875 0.67187 4.0312 0.67187h223.55c6.1602 0 11.199-4.9258 11.199-11.199l-0.003906-366.12c0-6.1602-5.0391-11.199-11.199-11.199h-43.23l-0.003906-21.84c0-0.22266-0.11328-0.33594-0.11328-0.55859h44.352c18.031 0 32.594 14.672 32.594 32.59z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m352.93 48.738c-9.2109 0-16.617 7.5-16.617 16.711 0 9.2109 7.4062 16.711 16.617 16.711 9.2109 0 16.711-7.5039 16.711-16.711 0.003907-9.207-7.5-16.711-16.711-16.711z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m246.79 251.44h59.023c6.1602 0 11.199-4.9258 11.199-11.199v-59.023c0-6.1602-5.0391-11.199-11.199-11.199h-59.023c-6.2734 0-11.199 5.0391-11.199 11.199v59.023c0 6.2695 4.9258 11.199 11.199 11.199zm11.199-59.027h36.625v36.625h-36.625z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m246.79 370.27h59.023c6.1602 0 11.199-4.9258 11.199-11.199v-59.023c0-6.1602-5.0391-11.199-11.199-11.199h-59.023c-6.2734 0-11.199 5.0391-11.199 11.199v59.023c0 6.2734 4.9258 11.199 11.199 11.199zm11.199-59.023h36.625v36.621h-36.625z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m350.53 201.82h102.71c6.1836 0 11.199-5.0078 11.199-11.199s-5.0156-11.199-11.199-11.199h-102.71c-6.1836 0-11.199 5.0078-11.199 11.199 0 6.1875 5.0156 11.199 11.199 11.199z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m350.53 244.6h75.18c6.1836 0 11.199-5.0078 11.199-11.199s-5.0156-11.199-11.199-11.199h-75.18c-6.1836 0-11.199 5.0078-11.199 11.199 0 6.1875 5.0156 11.199 11.199 11.199z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m350.53 319.41h102.71c6.1836 0 11.199-5.0078 11.199-11.199s-5.0156-11.199-11.199-11.199h-102.71c-6.1836 0-11.199 5.0078-11.199 11.199 0 6.1875 5.0156 11.199 11.199 11.199z"/>
 <path fill={selected === 'learn' ? active : notActive} d="m350.53 362.18h75.18c6.1836 0 11.199-5.0078 11.199-11.199 0-6.1914-5.0156-11.199-11.199-11.199h-75.18c-6.1836 0-11.199 5.0078-11.199 11.199 0 6.1875 5.0156 11.199 11.199 11.199z"/>
 <use x="70" y="728" xlinkHref="#l"/>
 <use x="111.097656" y="728" xlinkHref="#c"/>
 <use x="138.714844" y="728" xlinkHref="#a"/>
 <use x="176.695312" y="728" xlinkHref="#h"/>
 <use x="214.484375" y="728" xlinkHref="#b"/>
 <use x="241.253906" y="728" xlinkHref="#a"/>
 <use x="279.234375" y="728" xlinkHref="#g"/>
 <use x="338.816406" y="728" xlinkHref="#f"/>
 <use x="378.902344" y="728" xlinkHref="#e"/>
 <use x="434.902344" y="728" xlinkHref="#d"/>
 <use x="478.242188" y="728" xlinkHref="#a"/>
 <use x="516.222656" y="728" xlinkHref="#k"/>
 <use x="549.417969" y="728" xlinkHref="#b"/>
 <use x="576.1875" y="728" xlinkHref="#j"/>
 <use x="614.660156" y="728" xlinkHref="#c"/>
 <use x="642.277344" y="728" xlinkHref="#i"/>
</g>
</svg>

const achievement = <img
src={trophyIcon}
className="object-contain h-6 mx-auto  rounded-xl"
/>

const game = <svg width={widthHeight} height={widthHeight} viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.1589 15.1439C38.5467 7.99018 36.1556 3.42689 32.3231 2.31488C31.5808 2.10235 30.8111 1.99633 30.0379 2.00011C27.6818 2.00011 25.8225 3.37615 21.6264 3.37615C17.4303 3.37615 15.5675 2.00011 13.2149 2.00011C12.4094 1.99602 11.6073 2.10196 10.8316 2.31488C6.99383 3.42689 4.62282 7.99448 2.99221 15.1439C1.32743 22.4463 1.62884 28.2162 4.88305 29.3239C7.16118 30.0979 9.19835 28.4974 11.1277 26.1418C13.3183 23.4586 16.0161 22.6329 21.6264 22.6329C27.2367 22.6329 29.8294 23.4586 32.0234 26.1418C33.9511 28.4992 36.0636 30.0799 38.2812 29.3377C41.8754 28.1328 41.8246 22.5323 40.1589 15.1439Z" stroke={selected === 'game' ? active : notActive} stroke-width="3.30249" stroke-miterlimit="10"/>
<path d="M24.781 14.7284C25.7488 14.7284 26.5334 13.9583 26.5334 13.0084C26.5334 12.0584 25.7488 11.2883 24.781 11.2883C23.8131 11.2883 23.0286 12.0584 23.0286 13.0084C23.0286 13.9583 23.8131 14.7284 24.781 14.7284Z" fill={selected === 'game' ? active : notActive}/>
<path d="M28.6355 18.5124C28.2887 18.5124 27.9497 18.4114 27.6614 18.2222C27.3731 18.033 27.1485 17.7641 27.016 17.4496C26.8835 17.135 26.8491 16.7889 26.9171 16.4552C26.985 16.1214 27.1524 15.8149 27.3979 15.5745C27.6434 15.3342 27.9561 15.1707 28.2963 15.1048C28.6365 15.0389 28.989 15.0736 29.3091 15.2044C29.6292 15.3353 29.9026 15.5564 30.0947 15.8398C30.2867 16.1233 30.3887 16.4562 30.3879 16.7966C30.3867 17.2521 30.2016 17.6884 29.873 18.0101C29.5445 18.3317 29.0995 18.5124 28.6355 18.5124Z" fill={selected === 'game' ? active : notActive}/>
<path d="M28.6355 10.9445C29.6033 10.9445 30.3879 10.1744 30.3879 9.22444C30.3879 8.27449 29.6033 7.50439 28.6355 7.50439C27.6676 7.50439 26.8831 8.27449 26.8831 9.22444C26.8831 10.1744 27.6676 10.9445 28.6355 10.9445Z" fill={selected === 'game' ? active : notActive}/>
<path d="M32.4913 14.7284C33.4591 14.7284 34.2437 13.9583 34.2437 13.0084C34.2437 12.0584 33.4591 11.2883 32.4913 11.2883C31.5235 11.2883 30.7389 12.0584 30.7389 13.0084C30.7389 13.9583 31.5235 14.7284 32.4913 14.7284Z" fill={selected === 'game' ? active : notActive}/>
<path d="M13.2148 8.88013V17.1364M17.4206 13.0082H9.00903" stroke={selected === 'game' ? active : notActive} stroke-width="2.20166" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const userImage = <img
src={user?.user ? user.photo : localStorage.getItem('photo')}
className={`object-contain h-6 mx-auto  rounded-xl bg-[${selected === 'profile' ? active : notActive}]`}
/>

  const images = [
    { image: home, to: '/' },
    { image: tasks, to: `/select-level?mode=learn&lang=${lang}&hand=${hand}` },
    {
      image: game,
      to: `/select-level?mode=game&lang=${lang}&hand=${hand}`
    },
    { image: achievement, to: '/keep-up-score-board' },
    {
      image: userImage,
      to: '/edit-profile'
    }
  ];

  // console.log(RegExp(location.search.replace('&', '').replace('=', ' ')).test('learn'), location.pathname, location.search)
  console.log(Boolean(location.search.match(/learn/)))
  return (
    <div
      className="fixed nav-bar z-10 transition-all flex flex-row top-[90vh] md:top-[90vh] mx-auto left-0 right-0 w-[90vw] shrink-0 px-3  justify-between py-4 csl:w-14 csl:static csl:flex-col csl:h-[80vh]"
    >
      {images.map(({ image, to }, index) => {
        return (
          <div
            className="relative nav-button"
            key={index}
            style={{
              boxShadow:
                (index == 0 || (index == 1 && Boolean(location.search.match(/learn/))) || (index == 2 && Boolean(location.search.match(/game/))) || (index == 5 && (Boolean(location.pathname.match(/edit-profile/)) || Boolean(location.pathname.match(/profile/)) || Boolean(location.pathname.match(/change-language/))))) ? ` active` : ` non-active`
                // index == 0 ? '' : ` 0px 5px 20px 5px rgba(0, 136, 103,0.9)`
            }}
          >
            <Link to={to}>
              {image}
            </Link>
            {(index == 1 && Boolean(location.search.match(/learn/)) || index == 2 && Boolean(location.search.match(/game/)) || index == 5 && (Boolean(location.pathname.match(/edit-profile/)) || Boolean(location.pathname.match(/profile/)) || Boolean(location.pathname.match(/change-language/)))) ? (
              <button
                style={{
                  backdropFilter: 'blur(100px)',
                  color: 'black'
                }}
                className={`absolute top-0 -z-10 active bg-transparent w-full h-6 backdrop-blur-3xl`}
                // className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
              ></button>
            ) : <button
            style={{
              backdropFilter: 'blur(100px)'
            }}
            className={`absolute top-0 -z-10 w-full h-6 backdrop-blur-3xl ${(index == 1 && Boolean(location.search.match(/learn/)) || index == 2 && Boolean(location.search.match(/game/)) || index == 4 && (Boolean(location.pathname.match(/edit-profile/)) || Boolean(location.pathname.match(/profile/)) || Boolean(location.pathname.match(/change-language/)))) ? ` active` : ` non-active`}`}
            // className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
          ></button>}
          </div>
        );
      })}
    </div>
  );
}

export default LeftSideBar;
