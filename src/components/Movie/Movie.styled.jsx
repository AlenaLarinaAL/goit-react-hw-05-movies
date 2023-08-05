import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const MovieContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export const Image = styled.img`
  min-width: 250px;
  max-width: 275px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  margin-bottom: 10px;
  font-size: ${theme.fontSizes.large};
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.gray};
`;
export const Span = styled.span`
  color: ${theme.colors.accent};
  margin-left: 5px;
`;
export const List = styled.ul`
  display: flex;
  gap: 10px;
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.gray};
`;
