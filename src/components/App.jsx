import { lazy, useEffect, useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Section } from './App.styled';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const Header = lazy(() => import('./header/header'));
const StatisticPage = lazy(() => import('../pages/StatisticPage'));
const Sidebar = lazy(() => import('./sidebar/sidebar'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Login = lazy(() => import('./Login/Login'));

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
          <div>{windowWidth >= 1440 ? <Sidebar /> : null}</div>
          <div>
            <header>
              <Header />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/statistics" element={<StatisticPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
              </Routes>
            </main>
          </div>
        </Section>
      </Suspense>
    </>
  );
};
