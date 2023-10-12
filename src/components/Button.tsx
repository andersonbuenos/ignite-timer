import {ButtonContainer, ButtonVariant} from './Button.styles';

interface ButtonProps {
    variant?: ButtonVariant;
}

export function Button({ variant = 'Primary' }) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}