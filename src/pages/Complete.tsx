import complete from '@assets/icons/complete.png';
import Ellipse98 from '@assets/icons/Ellipse98.png';
import Header from '@/components/Header';
import boy4 from '@/assets/icons/boy4.png';
import home from '@assets/icons/round-home.png';
import coin from '@assets/icons/coin.png';

const Complete = () => {
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
              <div className="flex justify-between  mb-8">
                <img src={coin} className="w-10" />
                <div className=" bg-[#008867] border-2 border-[#05C294] rounded-md  w-5/6 p-2">
                  <div className="flex justify-between">
                    <span>Level 1</span>
                    <div className=" bg-[#0D0D0D]  w-3/5">
                      <h4 className="text-center text-[#F8B936]">85%</h4>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex justify-between mb-8">
                <img src={coin} className="w-10" />
                <div className=" bg-[#008867] border-2 border-[#05C294] rounded-md  w-5/6 p-2">
                  <div className="flex justify-between">
                    <span>Level 1</span>
                    <div className=" bg-[#0D0D0D]  w-3/5">
                      <h4 className="text-center text-[#F8B936]">85%</h4>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex justify-between mb-8">
                <img src={coin} className="w-10" />
                <div className=" bg-[#008867] border-2 border-[#05C294] rounded-md  w-5/6 p-2">
                  <div className="flex justify-between">
                    <span>Level 1</span>
                    <div className=" bg-[#0D0D0D]  w-3/5">
                      <h4 className="text-center text-[#F8B936]">85%</h4>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="flex justify-between mb-8">
                <img src={coin} className="w-10" />
                <div className=" bg-[#008867] border-2 border-[#05C294] rounded-md  w-5/6 p-2">
                  <div className="flex justify-between">
                    <span>Level 1</span>
                    <div className=" bg-[#0D0D0D]  w-3/5">
                      <h4 className="text-center text-[#F8B936]">85%</h4>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div></div>
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

export default Complete;
