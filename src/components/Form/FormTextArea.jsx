import "./Form.scss";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";

export default function FormTextArea(props) {
    const {
        id,
        name,
        label,
        placeholder,
        defaultValue,
        errorMessage,
        className,
        labelClass,
        readOnly = false,
        required = false,
        onChange = () => {},
        ...restProps
    } = props;

    return (
        <FormGroup className={className}>
            {label && (
                <FormLabel className={labelClass} htmlFor={id} label={label} />
            )}
            <div className="form__text-area">
                <textarea
                    name={name}
                    id={id}
                    className="form__text-area-input"
                    placeholder={placeholder}
                    required={required}
                    readOnly={readOnly}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    {...restProps}
                />
            </div>
            {errorMessage && <p className="form__error">{errorMessage}</p>}
        </FormGroup>
    );
}
