import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'App/AppContext';

const P = {
  Container: styled.div`
    transition: background-color 0.5s linear;
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index: -10;
  `,
};

export const BackgroundInternal = () => {
  const { theme } = useContext(AppContext);
  return (
    <P.Container data-v2="particles" aria-label="Particles" theme={theme}>
    </P.Container>
  );
};
