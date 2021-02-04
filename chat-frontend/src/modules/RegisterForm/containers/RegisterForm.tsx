import React from 'react';
import { FormikHelpers } from 'formik'

import { default as RegisterFormBase } from '../components/RegisterForm';
import { userAPI } from '../../../utils/api';
import { openNotification } from '../../../utils';


export type RegisterPostData = {
    email: string
    firstName: string
    lastName: string
    password: string
};
type RegisterFormValues = RegisterPostData & { passwordRepeat: string };
type RegisterFormErrors = {
    [key: string]: string
};
enum StatusState {
    Success = "Поздравляем!",
    Faild = "Ошибка"
};
type Status = {
    state: StatusState
    message: string
    type: string
}

const RegisterForm: React.FC = () => {

    const success = false;

    const patterns = {
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
        cyrillic: /^([A-Z][a-z\-']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{1,50})$/,
    };

    const validate = (values: RegisterFormValues) => {

        const errors: RegisterFormErrors = {};

        for (let key in values) {
            if (!values[key as keyof RegisterFormValues]) errors[key] = 'Поле обязательное для заполнения'
        };

        if (values["email"] && !patterns.email.test(values["email"])) errors["email"] = 'Неверный формат E-mail';
        if (values.firstName && !patterns.cyrillic.test(values.firstName)) errors["firstName"] = "Неверный формат";
        if (values.lastName && !patterns.cyrillic.test(values.lastName)) errors["lastName"] = "Неверный формат";
        if (values["password"] && ((values["password"].length < 8) || (values["password"].length > 20))) {
            errors["password"] = 'Длина пароля 8-20 символов';
        } else if (values["password"] && !patterns.password.test(values["password"])) {
            errors["password"] = 'Пароль должен содержать заглавные и строчные символы латинского алфавита и цифры';
        };
        if (!(values["passwordRepeat"] && values["password"] && !errors["userPassword"] && values["passwordRepeat"] === values["password"])) {
            errors["passwordRepeat"] = 'Пароли не совпадают';
        };

        return errors;
    };

    const handleSubmit = (values: RegisterFormValues, { setSubmitting }: FormikHelpers<RegisterFormValues>) => {
        const postData: RegisterPostData = {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
        };
        let status: Status | null = null;
        return userAPI.registration(postData)
            .then(({ data }) => {
                console.log(data);
                status = { 
                    state: StatusState.Success,
                    message: "Вы успешно зарегистрировались",
                    type: "success",
                }
            })
            .catch(err => {
                console.log(err);
                status = {
                    state: StatusState.Faild,
                    message: err.response.data.message,
                    type: "error",
                };
            })
            .finally(() => {
                setSubmitting(false);
                openNotification({
                    title: status?.state,
                    text: status?.message,
                    type: status?.type,
                });
                if(status?.state !== "Ошибка") window.history.pushState(null, "", "/signin")
            })
    };

    return (
        <RegisterFormBase
            success={success}
            validate={validate}
            handleSubmit={handleSubmit}
        />
    );
};

export default RegisterForm;