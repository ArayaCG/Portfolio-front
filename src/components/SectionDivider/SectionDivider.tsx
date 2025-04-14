import type React from "react";
import { SectionDividerProps } from "./SectionDivider.type";
import { DividerLine } from "./SectionDivider.styles";

const SectionDivider: React.FC<SectionDividerProps> = ({ width, color, margin }) => {
    return <DividerLine width={width} color={color} margin={margin} />;
};

export default SectionDivider;
