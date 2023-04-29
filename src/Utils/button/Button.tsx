import { Knob } from "./styled";

interface Props {
    type: "button" | "submit";
    title?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button = ({type, onClick, children, className, title}: Props) => {
    return (
        <Knob type={type} title = {title} onClick={onClick} className={className}>
            {children}
        </Knob>
    )
}