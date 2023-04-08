// import InitialPage from './pages/InitialPage';
// import SelectLevel from './pages/SelectLevel';
// import Game from './pages/Game';
// import SelectHand from './pages/SelectHand';
// import StartLevel from './pages/StartLevel';
// import LevelCompleted from './pages/LevelCompleted';
// import SelectLanguage from './pages/SelectLanguage';
// import SelectMode from './pages/SelectMode';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import Login from './pages/Login';
// import { auth } from './config/firebase';

// function App() {
//   const [user, loading, error] = useAuthState(auth);
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!user) return <Login />;
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/">
//           <Route index element={<InitialPage />} />
//           <Route path="select-hand" element={<SelectHand />} />
//           <Route path="select-level" element={<SelectLevel />} />
//           <Route path="select-mode" element={<SelectMode />} />
//           <Route path="start-level" element={<StartLevel />} />
//           <Route path="select-language" element={<SelectLanguage />} />
//           <Route path="level-completed" element={<LevelCompleted />} />
//           <Route path="game" element={<Game />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

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
import SelectProfile from '@pages/select-profile';
import Welcome from '@pages/Welcome';
import LearnNew from '@pages/learn-new';
function App() {
  return (
    <div data-theme="forest">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="select-hand" element={<SelectHand />} />
            <Route path="select-level" element={<SelectLevel />} />
            <Route path="start-level" element={<StartLevel />} />
            <Route path="level-completed" element={<LevelCompleted />} />
            <Route path="game" element={<Game />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="start-learning" element={<StartLearning />} />
            <Route path="learn-new" element={<LearnNew />} />
          </Route>
          <Route path="landing" element={<Landing />} />
          <Route path="select-mode" element={<SelectMode />} />
          <Route path="login" element={<Login />} />
          <Route path="select-profile" element={<SelectProfile />} />
          <Route path="login" element={<Login />} />
          <Route path="select-game" element={<SelectGame />} />
          <Route path="*" element={<p>path not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
