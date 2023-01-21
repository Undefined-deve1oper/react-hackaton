export const validator = (data, config) => {
    const errors = {};
    function validate(value, validateMethod, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired":
                if (typeof data === "boolean") statusValidate = !data;
                else statusValidate = data.trim() === "";
                break;
            case "isEmail":
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            case "isContainCapitalSymbol":
                const capitalRegExp = /[A-Z]/g.test(value);
                statusValidate = !capitalRegExp.test(data);
                break;
            case "min":
                statusValidate = data.length < config.value;
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
