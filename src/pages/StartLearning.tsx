import React from 'react';
import Header from '@components/Header';
import LeftSideBar from '@components/LeftSideBar';
import RightSideBar from '@components/RightSideBar';
import { Outlet } from 'react-router';
import Glass from '../components/Glass';
import fidel from '@assets/logo/logo1.png';
import fidelLogo from '@assets/logo/fidel-text.png';
import vector from '@assets/logo/Vector.png';
import eclips from '@assets/images/Ellipse1.png';
import boy2 from '@assets/icons/boy2.png';
import glass from '@assets/images/glass.png';
import eclips139 from '@assets/icons/Ellipse 139.png';
import eclips140 from '@assets/icons/Ellipse 140.png';
import rectangle783 from '@assets/icons/Rectangle 783.png';
import rectangle802 from '@assets/icons/Rectangle 802.png';
import Circle from '@assets/images/Circle 1.png';
function StartLearning() {
  return (
    <div className="justify-center">
      <div className="absolute inset-x-[850px] top-0 w-96 h-96 ">
        <img src={Circle} />
      </div>
      <div className="absolute inset-x-[340px] inset-y-[180px] w-1/2 h-1/2 ">
        <img src={rectangle802} />
      </div>
    </div>
  );
}
export default StartLearning;
