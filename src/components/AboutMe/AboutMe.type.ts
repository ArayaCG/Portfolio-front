export interface ProfileData {
    name: string;
    rol: string;
    description: string;
    image: string;
    socialLinks?: {
        github?: string;
        linkedin?: string;
    };
}

export interface ProfileProps {
    profileData: ProfileData;
    onDownloadCV?: () => void;
}
