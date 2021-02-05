import React from 'react'
import { useField } from 'formik'
import { Input } from 'antd';


const LoginFormField = (props) => {

    const [field, meta] = useField(props);
    const faild = meta.error && meta.touched ? true : false;

    // console.log(meta.touched);
    // console.log(meta.error);

    return (
        <div className="auth-form__field-wrapper">
            <Input
                suffix={
                    (meta.touched && meta.error && <div className="auth-form__field-icon error-icon">&#10008;</div>) ||
                    (meta.touched && !meta.error && <div className="auth-form__field-icon success-icon">&#10004;</div>)
                }
                placeholder={props.placeholder}
                {...field}
                {...props}
            />
            <div className="auth-form__error-text">{faild ? meta.error : ''}</div>
        </div>
    )
};

export default LoginFormField;