/* Import Section */
import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";

/* Function */
const InputTextElement = (props) => {
    const [inputValue, setInputValue] = useState('');
    const labelClassName = props.labelClassName + " tx-blue";


    /* Methods */
    useEffect(() => {
        setInputValue(props.value ? props.value :"");
    });
    const handleChange = (e) => {
        setInputValue(e.target.value);
        props.onChangeText(e);
    };

    /* Render View Return - Start */
    return (
        <div className="spacing">
            <label htmlFor="username" className={labelClassName}>{props.label}</label>
            <div>
            <InputText
                name={props.name}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={props.placeholder}
                className={props.className}
                key={props.key}
                type={props.type}
                keyfilter={props.keyfilter}
                disabled={props.disabled}
            />
            </div>
        </div>
    );
};

/* Export default functionName; */
export default InputTextElement;