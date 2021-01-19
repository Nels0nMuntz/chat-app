import React from 'react'
import { Formik, Form } from 'formik';
import RegisterFormField from './RegisterFormField';
import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';


const RegisterForm = () => {

    const success = true;

    const patterns = {
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    };

    const validate = values => {
        const errors = {};
        for (let value in values) {
            if (!values[value]) errors[value] = 'Поле обязательное для заполнения'
        };

        if (values["userEmail"] && !patterns.email.test(values["userEmail"])) errors["userEmail"] = 'Неверный формат E-mail';

        if (values["userPassword"] && ((values["userPassword"].length < 8) || (values["userPassword"].length > 20))) {
            errors["userPassword"] = 'Длина пароля 8-20 символов';
        } else if (values["userPassword"] && !patterns.password.test(values["userPassword"])) {
            errors["userPassword"] = 'Пароль должен содержать заглавные и строчные символы латинского алфавита и цифры';
        };

        if (!(values["userPasswordRepeat"] && values["userPassword"] && !errors["userPassword"] && values["userPasswordRepeat"] === values["userPassword"])) {
            errors["userPasswordRepeat"] = 'Пароли не совпадают';
        };

        return errors;
    };

    return (
        <div className="auth__wrapper">
            <div className="auth__header">
                <h1>Регистрация</h1>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <div className="auth__form">
                {success ? (
                    <div className="auth-form__success-wrapper register-success">
                        <div className="register-success__icon">
                            <InfoCircleTwoTone style={{ fontSize: '50px' }} />
                        </div>
                        <h3 className="register-success__title">Подтвердите свой аккаунт</h3>
                        <p className="register-success__subtitle">На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                ) : (
                        <div className="auth-form__wrapper">
                            <Formik
                                initialValues={{
                                    userEmail: '',
                                    userName: '',
                                    userPassword: '',
                                    userPasswordRepeat: '',
                                }}
                                validate={validate}
                                onSubmit={(values, actions) => {
                                    console.log(values);
                                    console.log(actions);
                                }}
                            >
                                <Form>
                                    <RegisterFormField
                                        name="userEmail"
                                        type="email"
                                        placeholder="E-mail"
                                        className="auth-form__field"
                                    />
                                    <RegisterFormField
                                        name="userName"
                                        type="text"
                                        placeholder="Ваше имя"
                                        className="auth-form__field"
                                    />
                                    <RegisterFormField
                                        name="userPassword"
                                        type="password"
                                        placeholder="Пароль"
                                        className="auth-form__field"
                                    />
                                    <RegisterFormField
                                        name="userPasswordRepeat"
                                        type="password"
                                        placeholder="Повторите пароль"
                                        className="auth-form__field"
                                    />
                                    <button className="auth-form__button" type="submit" >Зарегистрироваться</button>
                                </Form>
                            </Formik>
                            <Link to='/login' className="auth__link">Войти в аккаунт</Link>
                        </div>
                    )}
            </div>
        </div>
    )
};

export default RegisterForm;
