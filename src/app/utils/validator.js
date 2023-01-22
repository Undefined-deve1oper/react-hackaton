export const validator = (data, config) => {
    const errors = {};
    function validate(value, validateMethod, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (typeof value === "boolean") statusValidate = !value;
                else statusValidate = value.trim() === "";
                break;
            case "isEmail":
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(value);
                break;
            case "isContainCapitalSymbol":
                const capitalRegExp = /[A-Z]/g;
                statusValidate = !capitalRegExp.test(value);
                break;
            case "min":
                statusValidate = value.length < config.value;
                break;
            default:
                break;
        }
        if (statusValidate) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                data[fieldName],
                validateMethod,
                config[fieldName][validateMethod]
            );
            if (!errors[fieldName] && error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};
