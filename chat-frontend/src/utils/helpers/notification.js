import { notification } from 'antd';

const openNotification = ({title, text, type = 'info'}) => notification[type]({
    message: title,
    description: text,
});

export default openNotification;