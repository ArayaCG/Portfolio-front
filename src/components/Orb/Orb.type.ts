import type React from "react";
export interface Buble {
    size: number;
    x: string;
    y: string;
    color: string;
    opacity?: number;
    blur?: number;
    duration?: number;
    scale?: [number, number];
}

export interface BackgroundProps {
    children: React.ReactNode;
}
