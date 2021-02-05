import React from 'react'
import { useLocation } from 'react-router-dom'
import { userAPI } from '../../../utils/api';
import { default as RegisterVerifyBase } from '../components/RegisterVerify'


export type DisplayModeTypes = "info" | "error" | "success"

const RegisterVerify: React.FC = () => {

    const [displayMode, setDisplayMode] = React.useState<DisplayModeTypes>("info");
    const location = useLocation();
    const hash = location.search ? location.search.split("hash=")[1] : null;

    React.useEffect(() => {
        if (!hash) return;
        userAPI.verify(hash)
            .then(({data}) => {
                if(data.status === "success"){
                    setDisplayMode("success");
                }else{
                    setDisplayMode("error");
                }
            })
            .catch(err => {
                console.log(err?.response);
                setDisplayMode("error");
            })
    })

    return (
        <RegisterVerifyBase
            mode={displayMode}
        />
    )
};

export default RegisterVerify;
