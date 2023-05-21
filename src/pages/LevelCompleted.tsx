import stars from "@assets/images/stars.png";
import { useContext, useEffect, useState, useTransition } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  getLevelScore,
  clearAllScore,
  storeSessionInfo,
  storeLevelScore,
} from "../utils/localsession";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { AuthContext } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { use } from "i18next";
const useGetSearchParams = (searchParams: URLSearchParams) => {
  const mode = searchParams.get("mode");
  const hand = searchParams.get("hand");
  const level = searchParams.get("level");
  const lang = searchParams.get("lang");
  const points = searchParams.get("points");
  // searchParams.delete('points');

  return { mode, hand, level, lang, points };
};
async function updateUserFirebaseLevel(userId, level) {
  const docRef = doc(db, "users", userId);
  await setDoc(docRef, { level: level }, { merge: true });
}
const socialMediaIcons = [AiOutlineInstagram, ImTwitter, GrFacebookOption];
function LevelCompleted() {
  const { search } = useLocation();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = useContext(AuthContext);
  const searchParams = useSearchParams()[0];
  const {
    mode,
    hand,
    level,
    lang,
    points: score,
  } = useGetSearchParams(searchParams);
  const [points, setPoints] = useState<number | string>(0);
  const [levelesScore, setLevelsScore] = useState<Record<string, number>>();
  const factor =
    lang == "en" ? (mode == "learn" ? Number(level) * 10 : 40) : 40;
    if (level == '1') localStorage.setItem(`levelOneScore_${localStorage.getItem('displayName')}`, ((Number(score) * 100) / factor).toFixed(2))
    if (level == '2') localStorage.setItem(`levelTwoScore_${localStorage.getItem('displayName')}`, ((Number(score) * 100) / factor).toFixed(2))
    if (level == '3') localStorage.setItem(`levelThreeScore_${localStorage.getItem('displayName')}`, ((Number(score) * 100) / factor).toFixed(2))
    if (level == '4') localStorage.setItem(`levelFourScore_${localStorage.getItem('displayName')}`, ((Number(score) * 100) / factor).toFixed(2))
  // searchParams.delete('level');
  if (level == "4") {
    const avg =
      (Number(localStorage.getItem(`levelOneScore_${localStorage.getItem('displayName')}`)) +
        Number(localStorage.getItem(`levelTwoScore_${localStorage.getItem('displayName')}`)) +
        Number(localStorage.getItem(`levelThreeScore_${localStorage.getItem('displayName')}`)) +
        Number(localStorage.getItem(`levelFourScore_${localStorage.getItem('displayName')}`))) / 
      4;
    localStorage.setItem("avg", String(avg));
  }
  useEffect(() => {
    localStorage.setItem("level", level);
  },[])
  useEffect(() => {
    (async () => {
      if (Number(level) == 4) {
        await storeSessionInfo(lang, hand, level);
        let levelScores = {};
        for (let i = 1; i < 4; i++) {
          let levelScore;
          if (mode == "game") {
            // add prefix to the level
            levelScore = await getLevelScore("game-" + String(i));
          } else {
            levelScore = await getLevelScore(String(i));
          }
          if (levelScore != undefined) {
            levelScores[i] = levelScore;
          }
        }
        levelScores[4] = ((Number(points) * 10) / 3).toFixed(2);
        let s = Object.values(levelScores); // array of level scores
        setPoints(
          Number(
            s.reduce((prev, current) => {
              return Number(prev) + Number(current);
            }, 0)
          ) / s.length
        );
        setPoints(0);
        // let va = ((Number(searchParams.get('points')) * 10) / 3).toFixed(1);

        setLevelsScore(levelScores);
        setPoints(levelScores[4]);
        await clearAllScore();
      } else {
        await storeSessionInfo(lang, hand, Number(level) + 1);
        let va = ((Number(score) * 10) / 3).toFixed(1);
        await storeLevelScore(level, va, mode);
        setPoints(va);
        console.log(user?.user)
        if (user?.user && mode == "game") {
          console.log("This is working")
          await updateUserFirebaseLevel(user.id, level);
        }
      }
      if (user?.user && mode == "game") {
        await updateUserFirebaseLevel(user.id, level);
      }
    })();
  }, [user]);
  return (
    <div className="flex h-screen md:h-auto justify-center relative md:mt-0">
      <div className="flex md:hidden absolute items-center flex-row md:flex-col gap-2 p-2 py-0 mr-auto md:ml-auto mt-8">
          <div
            className={`rounded-full flex items-center justify-center w-[80px] h-[80px] aspect-square ${
              ''
            }`}
            style={{
              background: '#2E2E2E',
              boxShadow: '0px 0px 20px 4px #FFAF52'
            }}
          >
            {(
              <img
                src={'user.photo'}
                alt="user profile picture"
                className="object-contain w-1/3 rounded-full"
              />
            )}
          </div>
          <div className='pl-4'>
            <p className='opacity-50 text-sm text-left'>Hello</p>
            <h2 className='text-left text-white text-md md:text-2xl font-[500] w-[200px]'>Ablaze Labs</h2>
          </div>
        </div>
      <div className="md:w-1/2 pt-[150px] md:pt-0 w-[300px] flex  flex-col items-center gap-2 md:gap-5 mt-[100px">
        <div className="absolute right-0 hidden md:flex flex-col gap-14">
          {socialMediaIcons.map((Icon) => {
            return <Icon size={20} />;
          })}
        </div>
        <div>
          {level == "4" ? (
             <button className="py-2 btn-primary capitalize mb-2 md:mb-5 rounded-lg md:rounded-md w-[100%] text-lg font-[500] md:font-normal md:text-xl text-white">
            <Link to={`/final-score-board?${localStorage.getItem("avg")}`}>
                {mode == "game" ? `Level ${level}` : "Completed"}
            </Link>
            </button>
          ) : (
            <button className="py-2 btn-primary capitalize mb-2 md:mb-5 rounded-lg md:rounded-md w-[100%] text-lg font-[500] md:font-normal md:text-xl text-white">
            <Link to={`/keep-up-score-board${search}`}>
                {mode == "game" ? `Level ${level}` : "Completed"}
            </Link>
            </button>
          )}
        </div>
        {mode == "learn" && (
          <p className="text-white font-bold text-center rounded-md w-full ">
            {t("level")} {level}
          </p>
        )}
        {/* {mode == 'game' ? (
          
        ) : (
        )} */}
        {mode === "game" && (
          <ul className="steps text-2xl self-stretch">
            {Array(Number(level))
              .fill("0")
              .map((_, i) => {
                return <li data-content="★" className="step  step-accent"></li>;
              })}
            {Array(4 - Number(level))
              .fill("0")
              .map((_, i) => {
                return (
                  <li data-content="★" className="step  step-neutral"></li>
                );
              })}
          </ul>
        )}
        <img src={stars} className="object-contain w-36  md:w-52" />

        <p className="font-bold">
          {mode == "game" ? "you scored" : "you have learned"}
        </p>
        <h1 className="text-white font-bold md:font-extrabold text-4xl md:text-6xl">
          {parseFloat(((Number(score) * 100) / factor).toFixed(2)) > 100
            ? 100
            : parseFloat(((Number(score) * 100) / factor).toFixed(2))}
          %
        </h1>
        {mode != "game" && <p className="font-bold">{t("otl")}</p>}
        <Link
          to={`/game?${searchParams.toString()}&level=${Number(level)}`}
          className="btn mt-5 font-bold capitalize bg-[#2E2E2E] hover:bg-[#3f3f3f] rounded-md w-full"
        >
          {mode == "game" ? (
            <p className="text-white font-bold text-xl"> {t("pa")}</p>
          ) : (
            <p className="text-white font-bold text-xl"> {t("la")}</p>
          )}
        </Link>
        {Number(level) !== 4 ? (
          <button
            onClick={() => {
              searchParams.delete("level");
              searchParams.delete("points");
              navigate(
                `/game?${searchParams.toString()}&level=${Number(level) + 1}`
              );
            }}
            className="btn font-bold capitalize text-xl text-black btn-accent rounded-md w-full"
          >
            {t("nxt")}{" "}
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default LevelCompleted;
