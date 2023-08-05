import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Title = styled.h4`
  font-size: ${theme.fontSizes.small};
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 300px;
`;
export const Subitle = styled.p`
  font-size: ${theme.fontSizes.small};
  font-weight: 700;
  padding-bottom: 10px;
  text-align: center;
  color: rgba(242, 163, 65, 0.4);
`;

export const Item = styled.li`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const LinkStyled = styled.a`
  display: block;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${theme.colors.accent};
    transform: scale(1.01);
    cursor: pointer;
  }
`;
