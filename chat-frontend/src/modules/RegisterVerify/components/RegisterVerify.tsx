import React from 'react'
import { InfoCircleTwoTone } from '@ant-design/icons';
import { DisplayModeTypes } from '../containers/RegisterVerify';
import errorIcon from '../../../assets/images/error.svg'
import successIcon from '../../../assets/images/successIcon.svg'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

type Props = {
    mode: DisplayModeTypes
}

const RegisterVerify: React.FC<Props> = ({ mode }) => {

    const renderSwitch = () => {
        switch (mode) {
            case "error":
                return (
                    <React.Fragment>
                        <div className="register-success__icon">
                            <img src={errorIcon} alt="Error" />
                            {/* <InfoCircleTwoTone style={{ fontSize: '50px' }} /> */}
                        </div>
                        <h3 className="register-success__title">Ошибка</h3>
                        <p className="register-success__subtitle">Ошибка при подтверждении аккаунта.</p>
                    </React.Fragment>
                );
            case "success":
                return (
                    <React.Fragment>
                        <div className="register-success__icon">
                            <img src={successIcon} alt="Success" />
                            {/* <InfoCircleTwoTone style={{ fontSize: '50px' }} /> */}
                        </div>
                        <h3 className="register-success__title">Готово</h3>
                        <p className="register-success__subtitle">Аккаунт успешнол подтвержден.</p>
                        <Link to="/signin">
                            <Button
                                type="primary"
                                className="register-success__button"
                                size="large"
                            >
                                Войти
                        </Button>
                        </Link>
                    </React.Fragment>
                );
            default:
                return (
                    <React.Fragment>
                        <div className="register-success__icon">
                            <InfoCircleTwoTone style={{ fontSize: '50px' }} />
                        </div>
                        <h3 className="register-success__title">Подтвердите свой аккаунт</h3>
                        <p className="register-success__subtitle">На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </React.Fragment>
                );
        }
    }

    return (
        <div className="auth__wrapper">
            <div className="auth-form__success-wrapper register-success">
                {renderSwitch()}
            </div>
        </div>
    )
};

export default RegisterVerify;
