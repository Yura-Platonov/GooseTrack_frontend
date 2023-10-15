import { lazy, useEffect, useState, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Section } from './App.styled';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const Header = lazy(() => import('./header/header'));
const Sidebar = lazy(() => import('./sidebar/sidebar'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));

export const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Section>
          <div>{windowWidth > 1440 ? <Sidebar /> : null}</div>
          <div>
            <header>
              <Header />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/" element={<h1>My account</h1>} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/statistics" element={<h1>Statistics</h1>} />
              </Routes>
            </main>
          </div>
        </Section>
      </Suspense>
    </>
  );
};
