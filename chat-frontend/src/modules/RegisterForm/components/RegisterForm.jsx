import React from 'react'
import { Formik, Form } from 'formik';
import RegisterFormField from './RegisterFormField';
import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';


const RegisterForm = ({ validate, handleSubmit, success }) => {

    return (
        <div className="auth__wrapper">
            {!success ? (
                <div className="auth__header">
                    <h1>Регистрация</h1>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
            ) : null}
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
                                    email: '',
                                    firstName: '',
                                    lastName: '',
                                    password: '',
                                    passwordRepeat: '',
                                }}
                                validate={validate}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <RegisterFormField
                                            name="email"
                                            type="email"
                                            placeholder="E-mail"
                                            className="auth-form__field"
                                        />
                                        <RegisterFormField
                                            name="firstName"
                                            type="text"
                                            placeholder="Ваше имя"
                                            className="auth-form__field"
                                        />
                                        <RegisterFormField
                                            name="lastName"
                                            type="text"
                                            placeholder="Ваша фамилия"
                                            className="auth-form__field"
                                        />
                                        <RegisterFormField
                                            name="password"
                                            type="password"
                                            placeholder="Пароль"
                                            className="auth-form__field"
                                        />
                                        <RegisterFormField
                                            name="passwordRepeat"
                                            type="password"
                                            placeholder="Повторите пароль"
                                            className="auth-form__field"
                                        />
                                        <button className="auth-form__button" type="submit" disabled={isSubmitting}  >Зарегистрироваться</button>
                                    </Form>
                                )}
                            </Formik>
                            <Link to='/signin' className="auth__link">Войти в аккаунт</Link>
                        </div>
                    )}
            </div>
        </div>
    )
};

export default RegisterForm;
