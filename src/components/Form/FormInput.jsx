import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import FormErrorIcon from "assets/icons/form__error.svg";

import "./Form.scss";

export default function FormInput(props) {
    const {
        id,
        name,
        label,
        placeholder,
        pattern,
        minLength,
        errMessage,
        className,
        labelClass,
        inputClass,
        icon,
        require = false,
        readOnly = false,
        hasIcon = false,
        type = "text",
    } = props;

    return (
        <FormGroup className={className}>
            {label && (
                <FormLabel htmlFor={id} label={label} className={labelClass} />
            )}
            <div className="form__text-input">
                <input
                    id={id}
                    name={name}
                    type={type}
                    className={`form__input ${inputClass}`}
                    placeholder={placeholder}
                    required={require}
                    pattern={pattern}
                    minLength={minLength}
                    readOnly={readOnly}
                />

                <img
                    src={FormErrorIcon}
                    alt=""
                    className="form__input-icon form__input-icon--error"
                />

                {hasIcon && (
                    <img src={icon} alt="" className="form__input-icon" />
                )}
            </div>
            {errMessage && <p className="form__error">{errMessage}</p>}
        </FormGroup>
    );
}
