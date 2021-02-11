import React from 'react'
import { Input } from 'antd'
import { AudioOutlined, SmileOutlined, SendOutlined, CameraOutlined } from '@ant-design/icons';
import { UploadField } from '@navjobs/upload'
import { Picker } from 'emoji-mart'
import classnames from 'classnames'

import './DialogInput.scss'

const DialogInput = () => {

    const [emojiVisibility, setEmojiVisibility] = React.useState(false);
    const changeEmojiVisibility = () => setEmojiVisibility(!emojiVisibility);
    const input = React.useRef();

    return (
        <Input
            className="dialog-input-wrapper"
            size="large"
            prefix={[
                <SmileOutlined className="dialog-input__smile dialog-input__icon" onClick={changeEmojiVisibility} key={1} />,
                <div className={classnames('dialog-input__emoji', emojiVisibility && 'dialog-input__emoji_visible')} key={2}>
                    <Picker
                        set='apple'
                        onSelect={emoji => console.log(emoji)}
                    />
                </div>
            ]}
            suffix={[
                <AudioOutlined className="dialog-input__audio dialog-input__icon" key={1} />,
                <SendOutlined className="dialog-input__dsend dialog-input__icon" key={2} />,
                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: 'camera-file'
                    }}
                    uploadProps={{
                        accept: '.jpg, .jpeg, .png, .gif, .bmp',
                        multiple: 'multiple'
                    }}
                    key={3}
                >
                    <CameraOutlined className="dialog-input__camera dialog-input__icon" key={4} />
                </UploadField>
            ]}
            placeholder="Введите текст сообщения…"
            style={{ outline: "none" }}
            autosize="true"
            ref={input}
        />
    )
}

export default DialogInput
