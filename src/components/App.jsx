import { lazy } from "react";
import { Suspense } from "react"
import { HashRouter, Route, Routes } from "react-router-dom";


const Header = lazy(() => import('./header/header'));
const CalendarPage = lazy(()=>import('../pages/CalendarPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<h1>My account</h1>} />
              <Route path="/calendar" element={<CalendarPage/>} />
              <Route path="/statistics" element={<h1>Statistics</h1>} />
            </Routes>
          </main>
       
      </Suspense>
    </>
  );
};