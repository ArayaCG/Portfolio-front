export interface IntroScreenProps {
    name: string;
    role: string;
    onEnter?: () => void;
}

export interface IntroScreenState {
    name: string;
    rol: string;
}
