import React from 'react'
import { useField } from 'formik'
import classnames from 'classnames'


const LoginFormField = ({ ...props }) => {

    const [field, meta] = useField(props);
    const faild = meta.error && meta.touched ? true : false;

    return (
        <div className="auth-form__field-wrapper">
            <input 
                className={classnames(
                    faild && 'input-error'
                )}
                {...field} 
                {...props} 
            />
            {meta.touched && (
                <React.Fragment>
                    {meta.error ? (
                        <div className="auth-form__field-icon error-icon">&#10008;</div>
                    ) : (
                            <div className="auth-form__field-icon success-icon">&#10004;</div>
                        )}
                </React.Fragment>
            )}

            <div className="auth-form__error-text">{faild ? meta.error : ''}</div>
        </div>
    )
};

export default LoginFormField;