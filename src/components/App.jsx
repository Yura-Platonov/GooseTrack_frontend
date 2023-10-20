// import { lazy, useEffect, useState, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Section } from './App.styled';

// const MainPage = lazy(() => import('./MainPage/MainPage'));
// const Header = lazy(() => import('./header/header'));
// const StatisticPage = lazy(() => import('../pages/StatisticPage'));
// const Sidebar = lazy(() => import('./sidebar/sidebar'));
// const CalendarPage = lazy(() => import('../pages/CalendarPage'));
// const Login = lazy(() => import('./Login/Login'));
// const SignUp = lazy(() => import('./SignUp/SignUp'));

// export const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <Section>
//           <div>{windowWidth >= 1440 ? <Sidebar /> : null}</div>
//           <div>
//             <header>
//               <Header />
//             </header>
//             <main>
//               <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route path="/calendar" element={<CalendarPage />} />
//                 <Route path="/statistics" element={<StatisticPage />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<SignUp />} />
//               </Routes>
//             </main>
//           </div>
//         </Section>
//       </Suspense>
//     </>
//   );
// };
import { lazy, Suspense, useEffect } from 'react';
import { refresh } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectToken } from '../redux/auth/selectors';
import { Container } from './App.styled';

import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import Spinner from './Spinner/spinner';
import { MainLayout } from './MainLayout/MainLayout';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, token]);

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="calendar" element={<CalendarPage />}></Route>
              <Route path="statistics" element={<StatisticsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
