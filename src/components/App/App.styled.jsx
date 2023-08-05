import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

export const NavLinkStyled = styled(NavLink)`
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: ${theme.colors.accent};
  }
  :hover,
  :focus {
    opacity: 1;
    transform: scale(1.1);
    color: ${theme.colors.accent};
  }
`;
