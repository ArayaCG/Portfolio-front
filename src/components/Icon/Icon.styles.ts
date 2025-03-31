import styled from "styled-components";
import { IconStyleProps } from "./Icon.types";

export const IconWrapper = styled.div<IconStyleProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${(props) => props.size || "24px"};
        height: ${(props) => props.size || "24px"};
        color: ${(props) => props.color || props.theme.colors.icon};
        transition: transform 0.2s ease, color 0.2s ease;
    }

    &:hover svg {
        transform: ${(props) => (props.onClick ? "scale(1.1)" : "none")};
    }
`;
