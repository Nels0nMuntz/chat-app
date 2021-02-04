import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { LoginForm, RegisterForm } from '../../modules'

import './Auth.scss'

const Auth = () => {

    const isAuth = useSelector(state => state.user.isAuth);

    return (
        <section className="auth">
            <div className="auth__container">
                <Route exact path={["/", "/signin"]}>
                    {isAuth ? <Redirect to="im"/> : <LoginForm/>}
                </Route>
                <Route exact path={["/signup"]} component={RegisterForm} />
            </div>
        </section>
    )
}

export default Auth
