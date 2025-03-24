import { InputHTMLAttributes, ChangeEvent } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
    onValueChange?: (value: string) => void;
    label: string;
    columnsClasses?: string; 
}

export const Input: React.FC<InputProps> = ({
    onValueChange,
    label, 
    columnsClasses,
    id,
    ...inputProps
}: InputProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onValueChange) {
          onValueChange(event.target.value); // Passa o valor da input como string
        }
      };

    return(
        <div className={`field column ${columnsClasses}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input className='input' 
                   id={id} {... inputProps}
                   onChange={handleChange}
                />
            </div>
        </div>
    )
}