import styled from "styled-components";
import { SectionDividerProps } from "./SectionDivider.type";

export const DividerLine = styled.div<SectionDividerProps>`
    width: ${({ width }) => width || "60%"};
    height: 2px;
    background-color: ${({ color, theme }) => color || theme.colors.section};
    margin: ${({ margin }) => margin || "3rem auto"};
    opacity: 0.8;
`;
