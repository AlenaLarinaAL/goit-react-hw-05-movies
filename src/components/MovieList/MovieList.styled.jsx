import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
`;

export const Title = styled.h4`
  font-size: ${theme.fontSizes.small};
  padding: 10px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;

  text-decoration: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
    transform: scale(1.01);
    cursor: pointer;
  }
`;
