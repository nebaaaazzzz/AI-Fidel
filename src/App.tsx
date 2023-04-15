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
import LearnNew from '@pages/learn-new';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from './context/AuthContext';
import SearchResult from './pages/SearchResult';

function App() {
  // if (loading) return <p>loading</p>;
  return (
    <div data-theme="forest">
      <ToastContainer />
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
              <Route element={<RootLayout />}>
                <Route path="select-hand" element={<SelectHand />} />
                <Route path="select-level" element={<SelectLevel />} />
                <Route path="start-level" element={<StartLevel />} />
                <Route path="level-completed" element={<LevelCompleted />} />
                <Route path="game" element={<Game />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="start-learning" element={<StartLearning />} />
                <Route path="learn-new" element={<LearnNew />} />
                <Route path="search-result" element={<SearchResult />} />
              </Route>
              <Route path="*" element={<p>path not found</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
