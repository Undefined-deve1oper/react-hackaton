export const errorsListener = (error) => {
    switch (error) {
        case "INVALID_PASSWORD":
            return "Некоректный Email или пароль";
        case "EMAIL_NOT_FOUND":
            return "Пользователя с таким Email или 'пароль' не существует";
        case "EMAIL_EXISTS":
            return "Некоректный Email";
        case "INVALID_EMAIL":
            return "Email введен некоректно";
        default:
            return error;
    }
};
