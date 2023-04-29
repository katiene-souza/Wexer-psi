

import { Control, useController } from "react-hook-form"
import { ContainerInput } from "../Input2/styled"


type Props = {
    label: string;
    placeholder?: string;
    name: string;
    id?: string;
    type: string;
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
}

export const Input = ({ label, placeholder, name, id = name, type, className, control}: Props) => {

    const {
        field: {ref, ...props},
    
    } = useController({name, control})
    
    return (
        <ContainerInput>
            {label && <label  htmlFor={id}>{label}</label>}
            <input 
            placeholder={placeholder}
            className={className}
            type ={type}
            ref={ref} 
            {...props} 
            />
        </ContainerInput>
    )
}