import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h4`
  font-size: ${theme.fontSizes.medium};
  /* color: ${theme.colors.accent}; */
  margin-bottom: 10px;
`;
export const Text = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
`;
