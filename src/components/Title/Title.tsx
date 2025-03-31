import React from "react";
import { StyledTitle } from "./Title.styles";
import { TitleProps } from "./Title.types";

const Title: React.FC<TitleProps> = ({ text, ...props }) => {
    return <StyledTitle {...props}>{text}</StyledTitle>;
};

export default Title;
