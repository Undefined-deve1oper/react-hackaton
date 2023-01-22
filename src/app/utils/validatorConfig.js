export const signInValidatorConfig = {
    email: {
        isRequired: {
            message: "Email обязателен для заполнения"
        },
        isEmail: {
            message: "Email введено некоректно"
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        }
    }
};
export const signUpValidatorConfig = {
    name: {
        isRequired: {
            message: "Имя обязательно для заполнения"
        }
    },
    email: {
        isRequired: {
            message: "Email обязателен для заполнения"
        },
        isEmail: {
            message: "Email введено некоректно"
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        },
        isContainCapitalSymbol: {
            message: "Пароль должен содержать минимум 1 заглавную букву"
        },
        min: {
            message: "Пароль не может быть меньше 6 символов",
            params: 6
        }
    }
};

export const rewiewsValidatorConfig = {
    review: {
        isRequired: {
            message: "Нельзя отправить пустой отзыв"
        },
        min: {
            message: "Комментарий не может быть меньше 30 символов",
            params: 30
        }
    }
};
