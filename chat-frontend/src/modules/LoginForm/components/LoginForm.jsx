import React from 'react'
import { Formik, Form } from 'formik';
import LoginFormField from './LoginFormField';
import { Link } from 'react-router-dom';


const LoginForm = ({ validate, handleSubmit }) => {

    return (
        <div className="auth__wrapper">
            <div className="auth__header">
                <h1>Войти в аккаунт</h1>
                <p>Пожалуйста, войдите в аккаунт</p>
            </div>
            <div className="auth__form">
                <div className="auth-form__wrapper">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validate={validate}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <LoginFormField
                                    name="email"
                                    type="email"
                                    placeholder="E-mail"
                                    className="auth-form__field"
                                />
                                <LoginFormField
                                    name="password"
                                    type="password"
                                    placeholder="Пароль"
                                    className="auth-form__field"
                                />
                                <button className="auth-form__button" type="submit" disabled={isSubmitting}>Войти  в аккаунт</button>
                            </Form>
                        )}
                    </Formik>
                    <Link to='/signup' className="auth__link">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;