import React from 'react'
import { Route } from 'react-router-dom'

import { LoginForm } from '../../modules'

import './Auth.scss'

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__container">
                <Route exact path={["/", "/login"]} component={LoginForm} />
            </div>
        </section>
    )
}

export default Auth
