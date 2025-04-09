import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { formatReal } from 'app/util/money';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    columnClasses?: string;
    currency?: boolean;

    /**
     * Callback com o valor já formatado.
     */
    onValueChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
    onValueChange,
    label,
    columnClasses = '',
    id,
    currency = false,
    ...inputProps
}) => {
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        if (value && currency) {
            value = formatReal(value);
        }

        if (onValueChange) {
            onValueChange(value); // string formatada
        }

        if (inputProps.onChange) {
            inputProps.onChange(event); // evento original
        }
    };

    return (
        <div className={`field column ${columnClasses}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input
                    className="input"
                    id={id}
                    {...inputProps}
                    onChange={onInputChange}
                />
            </div>
        </div>
    );
};
