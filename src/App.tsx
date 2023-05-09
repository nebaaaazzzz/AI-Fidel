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
import LearnNew from '@pages/LearnNew';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './context/AuthContext';
import Complete from './pages/Complete';
import ScoreBoard from './pages/ScoreBoard';
import { SpecificLevel } from './pages/SpecificLevel';
import EditProfile from './pages/EditProfile';
import ProfilePage from './pages/ProfilePage';
import Result from './pages/Result';
import Complete1 from './pages/Complete1';
import Complete2 from './pages/Complete2';
import { Provider } from 'jotai';

function App() {
  return (
    <div data-theme="forest">
      <ToastContainer />
      <Provider>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Landing />} />
                <Route path="select-mode" element={<SelectMode />} />
                <Route path="login" element={<Login />} />
                <Route path="select-profile" element={<SelectProfile />} />
                <Route path="login" element={<Login />} />
                <Route path="select-game" element={<SelectGame />} />
                <Route path="complete" element={<Complete />} />
                <Route path="score-board" element={<ScoreBoard />} />
                <Route path="trial" element={<Complete1 />} />
                <Route path="trial1" element={<Complete2 />} />
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
                </Route>
                <Route path="*" element={<p>path not found</p>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </Provider>
    </div>
  );
}

export default App;
