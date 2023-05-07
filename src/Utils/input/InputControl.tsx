/* eslint-disable @typescript-eslint/no-explicit-any */


import { Control, useController } from "react-hook-form"
import { ContainerInput } from "./styled"


type Props = {
    label: string;
    placeholder?: string;
    name: string;
    id?: string;
    type: string;
    className?: string;
    control: Control<any>;
    value?: never[];
    onChange?: (() => void) | any
}

export const Input = ({ label, placeholder, name, id = name, type, className, control}: Props) => {

    const {
        field: {ref, value, onChange, ...props},
    
    } = useController({name, control})
    
    return (
        <ContainerInput>
            {label && <label  htmlFor={id}>{label}</label>}
            <input 
            placeholder={placeholder}
            className={className}
            type ={type}
            ref={ref} 
            onChange={onChange}
            value={value}
            {...props} 
            />
        </ContainerInput>
    )
}