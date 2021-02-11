import { useDispatch } from 'react-redux';
import { FormikHelpers } from 'formik';

import { axios } from '../../../core'
import { openNotification } from '../../../utils';
import { initUser } from '../../../redux/user/actions';
import { default as LoginFormBase } from '../components/LoginForm';
import { storage } from '../../../core/localStorage';
import { LoginFormErrors, LoginPostData, Status } from '../types';
import { userAPI } from '../../../utils/api';
import { IUser } from './../../../redux/user/types';





const LoginForm = () => {

    const dispatch = useDispatch();
    const initUserHandler = (isAuth: boolean, userData: IUser) => initUser(isAuth, userData);

    const patterns = {
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/,
        email: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/
    };

    const validate = (values: LoginPostData): LoginFormErrors => {

        const errors: LoginFormErrors = {};

        for (let key in values) {
            if (!values[key as keyof LoginPostData]) errors[key] = 'Поле обязательное для заполнения'
        };
        if (values["email"] && !patterns.email.test(values["email"])) errors["email"] = 'Неверный формат E-mail';     

        return errors;
    };

    const handleSubmit = (values: LoginPostData, { setSubmitting }: FormikHelpers<LoginPostData>): Promise<void> => {

        const postData: LoginPostData = {
            email: values.email,
            password: values.password,
        };

        let status: Status | null = null;

        return userAPI.login(postData)
            .then(({ data }) => {
                status = {
                    type: "success",
                    userData: data.user
                };
                if(data.token){
                    storage.setToken(data.token);
                }else{
                    throw new Error("Server response does not contain JWT token :(");
                }                
            })
            .catch(err => {
                console.log(err);                
                status = {
                    type: "error",
                    title: "Ошибка",
                    text: "Неверно указан адрес электронной почты или пароль",
                    userData: null
                };
                openNotification({
                    title: status.title,
                    text: status.text,
                    type: status.type,
                })
            })
            .finally(() => {
                setSubmitting(false)
                if(status?.type === "success" && !!status.userData)  dispatch(initUserHandler(true, status.userData))
            })
    };

    return (
        <LoginFormBase
            validate={validate}
            handleSubmit={handleSubmit}
        />
    )
};

export default LoginForm;