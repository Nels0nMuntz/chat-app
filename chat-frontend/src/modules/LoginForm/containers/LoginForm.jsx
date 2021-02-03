
import { useDispatch } from 'react-redux';

import { axios } from '../../../core'
import { openNotification } from '../../../utils';
import { setData } from '../../../redux/user/actions';
import { default as LoginFormBase } from '../components/LoginForm';
import { storage } from './../../../core/localStorage';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {

    const dispatch = useDispatch();
    const setUserData = data => setData({ token: data.token })

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

    const handleSubmit = (values, { setStatus, setSubmitting }) => {
        const postData = {
            login: values.userEmail,
            password: values.userPassword,
        };
        let status = null;
        return axios.post("/user/login", postData)
            .then(({ data }) => {
                status = {
                    state: "Success",
                    token: data.token
                };
                setStatus(status);
                dispatch(setUserData(data))
                storage.setToken(data.token)
                axios.defaults.headers["token"] = storage.getToken();
                <Redirect to=""/>
            })
            .catch(err => {
                status = {
                    state: "Faild",
                    message: err.response.data.message,
                    details: err
                }
            })
            .finally(() => {
                if (status.state === "Faild") {
                    openNotification({
                        title: "",
                        text: status.message,
                        type: "error",
                    })
                }
                setSubmitting(false);
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