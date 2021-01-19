import React from 'react'
import { useField } from 'formik'


const RegisterFormField = ({ ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className="auth-form__field-wrapper">
            <input {...field} {...props} />
            {meta.touched && (
                <React.Fragment>
                    {meta.error ? (
                        <div className="auth-form__field-icon error-icon">&#10008;</div>
                    ) : (
                            <div className="auth-form__field-icon success-icon">&#10004;</div>
                        )}
                </React.Fragment>
            )}

            <div className="auth-form__error-text">{meta.error && meta.touched ? meta.error : ''}</div>
        </div>
    )
};

export default RegisterFormField;