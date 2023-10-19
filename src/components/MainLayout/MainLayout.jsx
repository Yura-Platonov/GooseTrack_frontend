import { Outlet } from 'react-router';
import { useState, useEffect } from 'react';

import { Wrapper, Main, Box, Container } from './MainLayout.styled';
import SideBar from '../sidebar/sidebar';
import  Header from '../header/header';
import { useAdaptiveScreen } from '../../hooks/useAdaptiveScreen';

export const MainLayout = () => {
  const { isDesktop } = useAdaptiveScreen();
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  useEffect(() => {
    if (sideBarIsVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sideBarIsVisible]);

  const onSidebarShow = () => {
    setSideBarIsVisible(state => !state);
  };

  return (
    <Wrapper>
      <main>
        <Container style={{ display: 'flex' }}>
          {(isDesktop || sideBarIsVisible) && (
            <SideBar onSidebarShow={onSidebarShow} />
          )}

          <Box>
            <Header onSidebarShow={onSidebarShow} />
            <Main>
              <Outlet />
            </Main>
          </Box>
        </Container>
      </main>
    </Wrapper>
  );
};