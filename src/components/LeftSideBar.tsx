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
      className="w-14 self-center h-[500px] bg flex px-3 flex-col justify-between py-4 "
    >
      {images.map((image, index) => {
        return (
          <a href="">
            <img src={image} className="object-contain mx-auto" key={index} />
          </a>
        );
      })}
    </div>
  );
}

export default LeftSideBar;
