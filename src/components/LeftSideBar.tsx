import appIcon from '@assets/icons/app-icon.png';
import checklistIcon from '@assets/icons/checklist-icon.png';
import editIcon from '@assets/icons/edit-icon.png';
import trophyIcon from '@assets/icons/trophy-icon.png';
import avatarIcon from '@assets/icons/avatar-icon.png';
import famecontrollerIcon from '@assets/icons/gamecontroller-icon.png';
import { Link } from 'react-router-dom';
import { handAtom } from '../store/store';
import { langAtom } from '../store/store';
import { useAtom } from 'jotai';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';

function LeftSideBar() {
  const [lang] = useAtom(langAtom);
  const [hand] = useAtom(handAtom);
  const user = useContext(AuthContext);

  const images = [
    { image: appIcon, to: '/' },
    {
      image: checklistIcon,
      to: `/select-level?mode=learn&lang=${lang}&hand=${hand}`
    },
    {
      image: famecontrollerIcon,
      to: `/select-level?mode=game&lang=${lang}&hand=${hand}`
    },
    { image: editIcon, to: '/trial' },
    { image: trophyIcon, to: '/final-score-board' },
    {
      image: user?.user ? user.photo : localStorage.getItem('photo'),
      to: '/edit-profile'
    }
  ];
  return (
    <div
      style={{
        borderRadius: '17px',
        backdropFilter: ' blur(19.5px)',
        border: '4px solid rgba(255, 255, 255, 0.09)',
        background:
          'linear-gradient(104.13deg, rgba(78, 78, 78, 0.4) 17.81%, rgba(52, 52, 52, 0.45) 90.16%)'
      }}
      className="fixed top-[90vh] mx-auto left-0 right-0 w-[calc(100vw-2rem)]  shrink-0  flex px-3  justify-between py-4 md:w-14 md:static md:flex-col md:h-[500px]"
    >
      {images.map(({ image, to }, index) => {
        return (
          <div
            className="relative"
            style={{
              boxShadow:
                index == 0 ? '' : ` 0px 5px 20px 5px rgba(0, 136, 103,0.9)`
            }}
          >
            <Link to={to}>
              <img
                src={image}
                className="object-cover h-6 mx-auto"
                key={index}
              />
            </Link>
            {index != 0 && (
              <p
                style={{
                  backdropFilter: 'blur(100px)'
                }}
                className="absolute top-0 -z-10 bg-[rgb(20,83,67)]  w-full h-6 backdrop-blur-3xl"
              ></p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LeftSideBar;
