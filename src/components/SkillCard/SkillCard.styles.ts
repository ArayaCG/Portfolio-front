import styled, { keyframes } from "styled-components";
import type { CardInnerProps } from "./SkillCard.type";

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const flipBackAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const CardContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    perspective: 1000px;
    margin: 0 ${({ theme }) => theme.spacing.md};
    cursor: pointer;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100px;
        height: 100px;
        margin: 0 ${({ theme }) => theme.spacing.sm};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 80px;
        height: 80px;
        margin: 0 ${({ theme }) => theme.spacing.xs};
    }
`;

export const CardInner = styled.div<CardInnerProps>`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    animation: ${(props) => (props.isFlipped ? flipAnimation : flipBackAnimation)} 0.6s forwards;
`;

export const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: 2px solid ${({ theme }) => theme.colors.lines};
    overflow: hidden;
`;

export const CardFront = styled(CardFace)`
    background-color: rgba(18, 24, 16, 0.7);
    padding: ${({ theme }) => theme.spacing.xs};
`;

export const CardBack = styled(CardFace)`
    background-color: ${({ theme }) => theme.colors.accent};
    transform: rotateY(180deg);
`;

export const SkillName = styled.p`
    margin-top: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.icon};
    text-align: center;
`;

export const IconWrapper = styled.div`
    font-size: 70px;
    color: ${({ theme }) => theme.colors.icon};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    svg {
        width: 80%;
        height: 80%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 60px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 50px;
    }
`;

export const ImageWrapper = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 40px;
        height: 40px;
    }
`;
