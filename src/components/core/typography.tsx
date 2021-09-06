import styled from "@emotion/styled";
import { Theme } from "../../theme";

export const H1 = styled.h1<{ margin?: string; theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.second};
`;
export const H2 = styled.h2<{ margin?: string; theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.second};
`;
export const H3 = styled.h3<{ margin?: string; theme?: Theme }>`
  margin: ${({ margin }) => margin || "inherit"};
  color: ${({ theme }) => theme.colors.neutral.third};
`;
export const H4 = styled.h4<{ margin?: string; theme?: Theme }>`
  margin: ${({ margin }) => margin || "inherit"};
  color: ${({ theme }) => theme.colors.neutral.second};
  font-weight: 500;
`;
export const P = styled.p<{ margin?: string; theme?: Theme }>`
  margin: ${({ margin }) => margin || "inherit"};
  color: ${({ theme }) => theme.colors.neutral.first};
  font-size: 14px;
`;
