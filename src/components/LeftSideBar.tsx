import React from 'react';
import appIcon from '@assets/icons/app-icon.png';
import checklistIcon from '@assets/icons/checklist-icon.png';
import editIcon from '@assets/icons/edit-icon.png';
import trophyIcon from '@assets/icons/trophy-icon.png';
import avatarIcon from '@assets/icons/avatar-icon.png';
import famecontrollerIcon from '@assets/icons/gamecontroller-icon.png';
const images = [
  appIcon,
  checklistIcon,
  editIcon,
  famecontrollerIcon,
  trophyIcon,
  avatarIcon
];
function LeftSideBar() {
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
      {images.map((image, index) => {
        return (
          <a
            href=""
            style={{
              boxShadow:
                index == 0 ? '' : `0px 0px 20px 5px rgba(0, 136, 103,0.9)`
            }}
          >
            <img src={image} className="object-contain mx-auto" key={index} />
          </a>
        );
      })}
    </div>
  );
}

export default LeftSideBar;
