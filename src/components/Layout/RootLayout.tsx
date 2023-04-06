import React from 'react';
import Header from '@components/Header';
import LeftSideBar from '@components/LeftSideBar';
import RightSideBar from '@components/RightSideBar';
import { Outlet } from 'react-router';
function RootLayout() {
  return (
    <>
      <Header />
      <div className="flex gap-10 px-2 ">
        <LeftSideBar />
        <div className="flex-[3]">
          <Outlet />
        </div>
        <RightSideBar />
      </div>
    </>
  );
}

export default RootLayout;
