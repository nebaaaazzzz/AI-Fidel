import React from 'react';
import filterIcon from '@assets/icons/filter-icon.png';
const categories = [
  'Signs',
  'Numbers',
  'Quantities',
  'Colors',
  'Time',
  'Patterns',
  'Seasons',
  'People'
];
const modes = ['Education', 'Game'];
function RightSideBar() {
  return (
    <div className="hidden md:flex shrink-0  mr-10 flex-col items-center gap-5">
      <Icon />
      <div
        className="flex flex-col md:w-42 mt-3 lg:w-56 items-center px-5 rounded-lg py-2"
        style={{
          backgroundImage:
            'linear-gradient(104.13deg, rgba(0, 0, 0, 0.4) 17.81%, rgba(0, 0, 0, 0.45) 90.16%)',
          backdropFilter: 'blur(20.5px)'
        }}
      >
        <div className="flex gap-2 border-primary border-2 rounded-lg px-6 my-3">
          <p>filter</p>
          <img src={filterIcon} className="object-contain" />
        </div>
        <Header text="Categories" />
        {categories.map((category, index) => {
          return <TextContainer key={index} text={category} />;
        })}
        <Header text="Modes" />

        {modes.map((mode, index) => {
          return <TextContainer key={index} text={mode} />;
        })}
      </div>
    </div>
  );
}
function Icon() {
  return (
    <div className="relative flex">
      <div className="w-20 aspect-square rounded-full bg-primary"></div>
      <div
        style={{
          background:
            'linear-gradient(92.98deg, rgba(255, 255, 255, 0.41) -10.29%, rgba(255, 252, 252, 0.1) 138.28%)',
          backdropFilter: 'blur(10.5px)'
        }}
        className="w-28 absolute  top-8 -left-4 h-14 bg-primary rounded-b-full"
      ></div>
    </div>
  );
}
function Header({ text }: { text: string }) {
  return (
    <>
      <h1 className="mt-5 mb-1  font-bold text-xl propse text-primary">
        {text}
      </h1>
      <Divider />
    </>
  );
}
function TextContainer({ text }: { text: string }) {
  return (
    <div className="mt-2 w-full">
      <p className="text-white text-[11px] text-center">{text}</p>
      <Divider />
    </div>
  );
}
function Divider() {
  return (
    <div
      style={{
        height: '0px',
        border: '0.03px solid rgba(255, 255, 255, 0.09)'
      }}
      className="w-full"
    ></div>
  );
}

export default RightSideBar;
