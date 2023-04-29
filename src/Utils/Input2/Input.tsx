
import { ContainerInput } from "./styled";


type Props = {
    name: string;
    id?: string;
    label?: string;
    type: string;
    value?: string;
    placeholder?: string;
    className?: string;
}   

export const Input = ({name, id = name, label, type, value, placeholder, className, ...props}: Props) => {
    return(
        <ContainerInput>
            {label && <label  htmlFor={id}>{label}</label>}
            <input 
                name={name} 
                id={id} 
                value={value} 
                type={type} 
                placeholder={placeholder}
                className={className}
                {...props}
            />
        </ContainerInput>
    )
}



