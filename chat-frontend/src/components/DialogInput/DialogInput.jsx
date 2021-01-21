import React from 'react'
import { Input } from 'antd'
import { AudioOutlined, SmileOutlined, SendOutlined, CameraOutlined } from '@ant-design/icons';

import './DialogInput.scss'

const DialogInput = () => {
    return (
        <Input
            className="dialog-input-wrapper"
            size="large"
            prefix={
                <SmileOutlined className="dialog-input__smile dialog-input__icon"/>
            }
            suffix={[
                <CameraOutlined className="dialog-input__camera dialog-input__icon" />,
                <AudioOutlined className="dialog-input__audio dialog-input__icon" />,
                <SendOutlined className="dialog-input__dsend dialog-input__icon" />
            ]}
            placeholder="Введите текст сообщения…"
            style={{ outline: "none" }}
            autoSize={true}
        />
    )
}

export default DialogInput
