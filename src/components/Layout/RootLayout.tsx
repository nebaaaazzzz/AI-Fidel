import React from 'react';
import Header from '@components/Header';
import LeftSideBar from '@components/LeftSideBar';
import RightSideBar from '@components/RightSideBar';
import { Outlet } from 'react-router';
function RootLayout() {
  return (
    <div className="bg-[#0d0d0d]">
      <Header />
      <div className="flex gap-10 p-0 md:p-14 md:pt-0 px-0 md:px-6">
        <LeftSideBar />
        <div className="flex-[3] transition-all flex-shrink overflow-hidden md:mt-12 csl:mt-0">
          <Outlet />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default RootLayout;
