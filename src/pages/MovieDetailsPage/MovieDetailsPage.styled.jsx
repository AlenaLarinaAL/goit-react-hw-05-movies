import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles/theme';

export const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 20px;
  width: 40px;
  padding: 5px;
  font-weight: 600;
  border-radius: 5px;
  /* background-color: rgba(242, 163, 65, 0.7); */
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: ${theme.colors.light};
  font-size: ${theme.fontSizes.small};
  transition: ${theme.animation.duration}, ${theme.animation.cubicBezier};

  :hover,
  :focus {
    opacity: 1;
    transform: scale(1.1);
    color: ${theme.colors.accent};
  }
`;

export const LinkItem = styled(Link)`
  font-size: ${theme.fontSizes.medium};
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
export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
