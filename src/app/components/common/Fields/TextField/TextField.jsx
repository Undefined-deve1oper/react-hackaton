import React, { useState } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../../SvgIcon";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    id,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const getHiddenButtonClasses = () => {
        if (!showPassword) {
            return "text-field__hiddenButton";
        } else {
            return "text-field__hiddenButton_show";
        }
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="text-field">
            {label && <label htmlFor={name}>{label}</label>}
            <div className="text-field__body">
                <input
                    type={showPassword ? "text" : type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`text-field__input-base ${
                        error ? "is-invalid" : ""
                    }`}
                    {...rest}
                />
                {type === "password" && (
                    <button
                        className={getHiddenButtonClasses()}
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <SvgIcon
                            svgClass="text-field__password"
                            name="password"
                            width="20"
                            height="20"
                        />
                    </button>
                )}
            </div>
            {error && <div className="text-field__error">{error}</div>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default React.memo(TextField);
