import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const Header = lazy(() => import('./header/header'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/" element={<h1>My account</h1>} />
            <Route path="/calendar" element={<h1>Calendar</h1>} />
            <Route path="/statistics" element={<h1>Statistics</h1>} />
          </Routes>
        </main>
      </Suspense>
    </>
  );
};
