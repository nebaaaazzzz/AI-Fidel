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
import coin from '@assets/icons/coin.svg';
import grayCoin from '@assets/icons/grayCoin.svg';
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
    if (mode === "game")  localStorage.setItem("level", level);
  },[])
  useEffect(() => {
    (async () => {
      if (Number(level) == 4) {
        // await storeSessionInfo(lang, hand, level);
        localStorage.setItem("level", level);
        let levelScores = {};
        for (let i = 1; i < 4; i++) {
          let levelScore;
          if (mode == "game") {
            // add prefix to the level
            // levelScore = await getLevelScore("game-" + String(i));
          } else {
            // levelScore = await getLevelScore(String(i));
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
        // await storeSessionInfo(lang, hand, Number(level) + 1);
        let va = ((Number(score) * 10) / 3).toFixed(1);
        // await storeLevelScore(level, va, mode);
        // setPoints(va);
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
      <div className="md:w-2/3 h-[80vh] md:h-auto mt-[9vh] md:mt-0 md:pt-0 w-11/12 flex flex-col justify-center gap-4 items-center">
        <div className="absolute right-0 hidden md:flex flex-col gap-14">
          {socialMediaIcons.map((Icon) => {
            return <Icon size={20} />;
          })}
        </div>
        <Link 
          to={level == "4" ? `/final-score-board?${localStorage.getItem("avg")}` : `/keep-up-score-board${search}`} 
          className="py-2 btn-primary capitalize mb-2 md:mb-5 rounded-lg md:rounded-md w-full text-lg font-[500] md:font-normal md:text-xl text-white text-center">
            {mode == "game" ? `${t("l")} ${level}` : t("c")}
        </Link>
        {mode == "learn" && (
          <p className="text-white mt-0 md:mt-[-20px] font-bold text-center rounded-md w-full ">
            {t("l")} {level}
          </p>
        )}
        {/* {mode == 'game' ? (
          
        ) : (
        )} */}



        {/* Change made here */}


         {/* {mode === "game" && (
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
        )} */}

        
        {mode === "game" && (
          <ul className="steps text-2xl h-[2.5rem] self-stretch">
            {Array(Number(level))
              .fill("0")
              .map((_, i) => {
                return <li data-content="" className="step step-accent"><img src={coin} alt="" className="w-[35px] h-[35px] relative -top-[2.24rem] z-10"/></li>;
              })}
            {Array(4 - Number(level))
              .fill("0")
              .map((_, i) => {
                return (
                  <li data-content="" className="step step-neutral"><img src={grayCoin} alt="" className="w-[35px] h-[35px] relative -top-[2.24rem] z-10"/></li>
                );
              })}
          </ul>
        )}




        <img src={stars} className="object-contain w-36  md:w-52" />

        <p className="font-bold">
          {mode == "game" ? t("ys") : t("yhl")}
        </p>
        <h1 className="text-white font-bold md:font-extrabold text-4xl md:text-6xl">
          {parseFloat(((Number(score) * 100) / factor).toFixed(2)) > 100
            ? 100
            : parseFloat(((Number(score) * 100) / factor).toFixed(2))}
          %
        </h1>
        {mode != "game" && <p className="font-bold">{t("otl")}</p>}
        <Link
          to={`/game?mode=${mode}&hand=${hand}&lang=${lang}&level=${level}`}
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
