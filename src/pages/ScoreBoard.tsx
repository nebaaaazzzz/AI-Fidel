import ParentScoreBoard from "./ParentScoreBoard";
import GameKeepUpScoreBoard from "./GameKeepUpScoreBoard";
import LearnKeepUpScoreBoard from "./LearnKeepUpScoreBoard";
import { useState } from "react";


  const tabsData = [
    {
      label: 'Learn Mode',
      content: <LearnKeepUpScoreBoard/>
    },
    {
      label: 'Game Mode',
      content: <GameKeepUpScoreBoard/>
    },
  ];
  
  export function ScoreBoard() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    return (
      <ParentScoreBoard>
      <div>
        <div className="flex space-x-3 border-b w-[100%] -mt-[10px]">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={` border-b-4  w-[50%] transition-colors duration-300 ${
                  idx === activeTabIndex
                    ? 'border-teal-500'
                    : 'border-transparent hover:border-gray-200 focus:border-gray-200'
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div className=" pt-4">
          {tabsData[activeTabIndex].content}
        </div>
      </div>
      </ParentScoreBoard>
    );
  }
  

export default ScoreBoard;
