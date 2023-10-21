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
import ChoosedMonth from './calendar/choosedMonth/ChoosedMonth';
import ChoosedDay from './calendar/choosedDay/ChoosedDay';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const UserProfilePage = lazy(() => import('../pages/UserProfilePage/UserProfilePage'));

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
            <Route path="account" element={<UserProfilePage/>} />
              <Route path="calendar" element={<CalendarPage />}>
                <Route path="month/:currentDate" element={ChoosedMonth} />
                <Route path="day/:currentDate" element={ChoosedDay} />
              </Route>
              <Route path="statistics" element={<StatisticsPage />} />
            </Route>
            
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
