import React from 'react'
import { Formik, Form } from 'formik';
import LoginFormField from './LoginFormField';
import { Link } from 'react-router-dom';


const LoginForm = () => {

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
        
        return errors;
    };

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
                            userEmail: '',
                            userPassword: '',
                        }}
                        validate={validate}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            console.log(actions);
                        }}
                    >
                        <Form>
                            <LoginFormField
                                name="userEmail"
                                type="email"
                                placeholder="E-mail"
                                className="auth-form__field"
                            />
                            <LoginFormField
                                name="userPassword"
                                type="password"
                                placeholder="Пароль"
                                className="auth-form__field"
                            />
                            <button className="auth-form__button" type="submit" >Войти в аккаунт</button>
                        </Form>
                    </Formik>
                    <Link to='/register' className="auth__link">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;