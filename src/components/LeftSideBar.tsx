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


  const images = [
    { image: appIcon, to: '/' },
    { image: checklistIcon, to: `/select-level?mode=learn&lang=${lang}&hand=${hand}` },
    { image: trophyIcon, to: '/keep-up-score-board' },
    {
      image: famecontrollerIcon,
      to: `/select-level?mode=game&lang=${lang}&hand=${hand}`
    },
  ];

  // console.log(RegExp(location.search.replace('&', '').replace('=', ' ')).test('learn'), location.pathname, location.search)
  console.log(Boolean(location.search.match(/learn/)))
  return (
    <div
      style={{
        borderRadius: '17px',
        backdropFilter: ' blur(19.5px)',
        border: '4px solid rgba(255, 255, 255, 0.09)',
        background:
          'linear-gradient(104.13deg, rgba(78, 78, 78, 0.4) 17.81%, rgba(52, 52, 52, 0.45) 90.16%)'
      }}
      className="fixed z-10 transition-all flex flex-row top-[90vh] md:top-[90vh] mx-auto left-0 right-0 w-[80vw] shrink-0 px-3  justify-between py-4 csl:w-14 csl:static csl:flex-col csl:h-[80vh]"
    >
      {images.map(({ image, to }, index) => {
        return (
          <div
            className="relative"
            key={index}
            style={{
              boxShadow:
                index == 0 ? '' : (index == 1 && Boolean(location.search.match(/learn/)) || index == 3 && Boolean(location.search.match(/game/))) ? ` 0px 0px 20px 5px #F8B936` : ` 0px 5px 20px 5px rgba(0, 136, 103,0.9)`
                // index == 0 ? '' : ` 0px 5px 20px 5px rgba(0, 136, 103,0.9)`
            }}
          >
            <Link to={to}>
              <img
                src={image}
                className="object-contain h-6 mx-auto  rounded-xl"
                key={index}
              />
            </Link>
            {index != 0 ? (index == 1 && Boolean(location.search.match(/learn/)) || index == 3 && Boolean(location.search.match(/game/))) ? (
              <p
                style={{
                  backdropFilter: 'blur(100px)'
                }}
                className={`absolute top-0 -z-10 bg-[#9f7721]  w-full h-6 backdrop-blur-3xl`}
                // className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
              ></p>
            ) : <p
            style={{
              backdropFilter: 'blur(100px)'
            }}
            className={`absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl`}
            // className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
          ></p> : null}
          </div>
        );
      })}


      
    <div className="relative">
     </div>
    
      <div
          className="relative"
          style={{
            boxShadow:
            (Boolean(location.pathname.match(/edit-profile/)) || Boolean(location.pathname.match(/profile/)) || Boolean(location.pathname.match(/change-language/))) ? ` 0px 0px 20px 5px #F8B936` : ` 0px 5px 20px 5px rgba(0, 136, 103,0.9)`
              // index == 0 ? '' : ` 0px 5px 20px 5px rgba(0, 136, 103,0.9)`
          }}
        >
          <Link to="/edit-profile">
            <img
              src={user?.user ? user.photo : localStorage.getItem('photo')}
              className="object-contain h-6 mx-auto  rounded-xl"
            />
          </Link>
          {(Boolean(location.pathname.match(/edit-profile/)) || Boolean(location.pathname.match(/profile/)) || Boolean(location.pathname.match(/change-language/))) ? (
            <p
              style={{
                backdropFilter: 'blur(100px)'
              }}
              className={`absolute top-0 -z-10 bg-[#9f7721]  w-full h-6 backdrop-blur-3xl`}
              // className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
            ></p>
          ) : <p
          style={{
            backdropFilter: 'blur(100px)'
          }}
          className={`absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl`}
          // className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
        ></p>}
        </div>


    </div>
  );
}

export default LeftSideBar;
