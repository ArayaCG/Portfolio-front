export interface FormData {
    name: string;
    email: string;
    message: string;
}

export interface ContactFormProps {
    onSubmit?: (data: FormData) => void;
}

export interface InputProps {
    $hasError?: boolean;
}
