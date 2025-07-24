import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from 'App/AppContext';

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.div`
    ${sharedStyles};
    font-size: 4rem;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2.5rem;
    }
  `,
  Title: styled.div`
    ${sharedStyles};
    font-size: 2.5rem;
    margin: 4rem 0;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2rem;
    }
  `,
};

export const Content = () => {
  const { config, theme } = useContext(AppContext);
  
  const nameHTML = Array.isArray(config.name.display)
    ? config.name.display.join('<br/>')
    : config.name.display;

  const titleHTML = Array.isArray(config.title.display)
    ? config.title.display.join('<br/>')
    : config.title.display;

  return (
    <>
      <C.Name
        data-v2="name"
        className="title"
        theme={theme}
        aria-label={config.name.aria}
        title={config.name.aria}
        dangerouslySetInnerHTML={{ __html: nameHTML }}
      />
      <C.Title
        data-v2="title"
        className="title"
        theme={theme}
        aria-label={config.title.aria}
        title={config.title.aria}
        dangerouslySetInnerHTML={{ __html: titleHTML }}
      />
    </>
  );
};
