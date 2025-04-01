import styled, { keyframes } from "styled-components";
import type { CarouselTrackProps } from "./SkillCarousel.type";

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-33.33%)); 
  }
`;

export const CarouselContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const CarouselTrack = styled.div<CarouselTrackProps>`
    display: flex;
    width: fit-content;

    animation: ${scroll} 30s linear infinite;

    animation-direction: ${({ direction }) => (direction === "left" ? "normal" : "reverse")};

    animation-timing-function: linear;

    &:hover {
        animation-play-state: paused;
    }
`;

export const CarouselSection = styled.div`
    margin: ${({ theme }) => theme.spacing.lg} 0;
    position: relative;
    overflow: hidden;
`;

export const CarouselInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
`;

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
`;
