import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectHand from '@pages/SelectHand';
import RootLayout from '@components/Layout/RootLayout';
import SelectLevel from '@pages/SelectLevel';
import StartLevel from '@pages/StartLevel';
import LevelCompleted from '@pages/LevelCompleted';
import Game from '@pages/Game';
import Landing from '@pages/Landing';
import SelectMode from '@pages/SelectMode';
import Login from '@pages/Login';
import SelectGame from '@pages/SelectGame';
import StartLearning from '@pages/StartLearning';
import SelectProfile from '@/pages/SelectProfile';
import Welcome from '@pages/Welcome';
import ComingSoon from '@pages/ComingSoon';
import LearnNew from '@pages/LearnNew';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './context/AuthContext';
import Complete from './pages/Complete';
import FinalScoreBoard from './pages/FinalScoreBoard';
import { SpecificLevel } from './pages/SpecificLevel';
import EditProfile from './pages/EditProfile';
import ProfilePage from './pages/ProfilePage';
import Result from './pages/Result';
import LevelScoreBoard from './pages/LevelScoreBoard';
import ScoreBoard from './pages/ScoreBoard';
import { ChangeLanguage } from './pages/ChangeLanguage';
import LearnKeepUpScoreBoard from './pages/LearnKeepUpScoreBoard';
import GameKeepUpScoreBoard from './pages/GameKeepUpScoreBoard';
import { useAtom } from 'jotai';
import { loadingAtom } from './store/store';
import loadingGif from '@assets/images/loading.gif';
import HandContextProvider from './context/HandContext';
import UsePC from './pages/UsePC';

function App() {
  const [loading] = useAtom(loadingAtom);

  const userAgent = navigator.userAgent;
  const isSafari = userAgent.includes('Safari');

  const isMobile = /Android|iPhone/i.test(navigator.userAgent);
  if (isMobile) return <UsePC message="mobile devices" />;
  if (isSafari) return <UsePC message="opera browsers" />

  if (loading)
    return (
      <div className=" fixed top-0 right-0 left-0 bottom-0">
        <img src={loadingGif} alt="" />
      </div>
    );
  return (
    <div data-theme="forest">
      <ToastContainer />
      <HandContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Landing />} />
                <Route path="select-mode" element={<SelectMode />} />
                <Route path="login" element={<Login />} />
                <Route path="select-profile" element={<SelectProfile />} />
                {/* <Route path="login" element={<Login />} />  */}
                <Route path="select-game" element={<SelectGame />} />
                {/* <Route path="use-pc" element={<UsePC message="mobile devices" />} /> */}
                <Route path="coming-soon" element={<ComingSoon />} />
                <Route path="complete" element={<Complete />} />
                <Route path="final-score-board" element={<FinalScoreBoard />} />
                <Route path="level-score-board" element={<LevelScoreBoard />} />
                <Route  path='score-board'  element={<ScoreBoard />} />
                <Route path="learn-keep-up-score-board" element={<LearnKeepUpScoreBoard />} />
                <Route path="game-keep-up-score-board" element={<GameKeepUpScoreBoard />} />
                <Route element={<RootLayout />}>
                  <Route path="select-hand" element={<SelectHand />} />
                  <Route path="select-level" element={<SelectLevel />} />
                  <Route path="start-level" element={<StartLevel />} />
                  <Route path="level-completed" element={<LevelCompleted />} />
                  <Route path="game" element={<Game />} />
                  <Route path="welcome" element={<Welcome />} />
                  <Route path="start-learning" element={<StartLearning />} />
                  <Route path="learn-new" element={<LearnNew />} />
                  <Route path="specific-level" element={<SpecificLevel />} />
                  <Route path="edit-profile" element={<EditProfile />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="result" element={<Result />} />
                  <Route path="change-language" element={<ChangeLanguage />} />
                </Route>
                <Route path="*" element={<p>path not found</p>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </HandContextProvider>
    </div>
  );
}

export default App;
