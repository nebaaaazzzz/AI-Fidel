import complete from '@assets/icons/complete.png';
import Ellipse98 from '@assets/icons/Ellipse98.png';
import Header from '@/components/Header';
import boy4 from '@/assets/icons/boy4.png';
import home from '@assets/icons/round-home.png';
import starts from '@assets/icons/starts.png';

const ScoreBoard = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <Header />
      <div className="flex gap-10 min-h-[82vh]">
        <div className="flex flex-col w-1/3 items-center relative">
          <div className="w-2/4 z-10">
            <img src={complete} />
          </div>
          <div className="w-2/6 mt-20">
            <img src={Ellipse98} />
          </div>
          <div className="custom-glass absolute w-8/12 aspect-video top-6 h-3/4 opacity-9">
            <div className="mt-2">
              <img src={boy4} className="w-9/12 mx-auto" />
            </div>
          </div>
          <button className="btn  mt-40 bg-[#2E2E2E] rounded-md  border-[#C3C3C3] border-2 text-xl font-bold w-2/5 shadow-[1px_1px_1px_rgba(220,220,220,0.5)]">
            <img src={home} className="w-7" />
            <div className=" ml-1"></div>
            <span>Home</span>
          </button>
        </div>
        <div className="flex flex-col w-2/3 items-center">
          <div className="w-5/6">
            <button className="btn bg-[#F8B936] rounded-md text-[#FFF]  border-[#C3C3C3] border-2 text-xl font-bold w-5/6 shadow-[1px_1px_1px_rgba(250,255,0,0.5)]  ml-12">
              Score Board
            </button>
            <div className="box-glass w-5/6 ml-12 rounded-md  mt-8 mb-6 p-4">
              <img src={starts} className="mx-auto  w-1/2" />
              <div className="flex flex-col w-4/6 mx-auto items-center  mt-4">
                <div>
                  <h3 className="text-lg font-bold">You have Scored</h3>
                </div>
                <div>
                  <h1 className=" text-5xl font-bold">98%</h1>
                </div>
                <div>
                  <h3 className="text-lg font-bold">of all the stages</h3>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="btn bg-[#008867] border-2 border-[#05C294] rounded-md  w-4/6 p-2">
                  Level Scores
                </button>
              </div>
            </div>
          </div>
          <button className="flex justify-between btn w-4/6 bg-[#2E2E2E] rounded-md  border-[#C3C3C3] border-2 text-xl font-bold shadow-[1px_1px_1px_rgba(220,220,220,0.5)]">
            <span>Share with Friends</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
