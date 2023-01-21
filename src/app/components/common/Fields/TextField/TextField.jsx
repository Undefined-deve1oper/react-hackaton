import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";
import SvgIcon from "../../SvgIcon";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = useCallback(({ target }) => {
        onChange({ name: [target.name], value: target.value });
    }, []);
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
            <input
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={"text-field__input-base"}
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
            {error && <div className="text-field__error">{error}</div>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextField;
