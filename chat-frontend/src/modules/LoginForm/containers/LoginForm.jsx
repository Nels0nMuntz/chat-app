
import { useDispatch } from 'react-redux';

import { axios } from '../../../core'
import { openNotification } from '../../../utils';
import { setIsAuth } from '../../../redux/user/actions';
import { default as LoginFormBase } from '../components/LoginForm';
import { storage } from './../../../core/localStorage';


const LoginForm = () => {

    const dispatch = useDispatch();
    const setAuthStatus = (value) => setIsAuth(value);

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
                console.log(data);
                if(data.token){
                    storage.setToken(data.token)
                    axios.defaults.headers["token"] = storage.getToken();
                    dispatch(setAuthStatus(true))
                }else{
                    throw new Error("Server response does not contain JWT token");
                }                
            })
            .catch(err => {
                status = {
                    state: "Faild",
                    message: err.response.data.message,
                    details: err
                };
                openNotification({
                    title: "Ошибка",
                    text: status.message,
                    type: "error",
                })
            })
            .finally(() => setSubmitting(false))
    };

    return (
        <LoginFormBase
            validate={validate}
            handleSubmit={handleSubmit}
        />
    )
};

export default LoginForm;