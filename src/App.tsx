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

function App() {
  return (
    <div data-theme="forest">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="select-hand" element={<SelectHand />} />
            <Route path="select-level" element={<SelectLevel />} />
          </Route>
          <Route path="*" element={<p>path not found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
