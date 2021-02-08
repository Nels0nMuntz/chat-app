import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types';

import { Avatar, Check, Time } from '../../components';

import './Message.scss'
import wave from './../../assets/images/wave.svg'
import playBtn from './../../assets/images/play-btn.svg'
import pauseBtn from './../../assets/images/pause-btn.svg'


const Message = ({ text, createdAt, user, audio, attachments, isReaded, isOwn, isTyping}) => {
    return (
        <div className={classnames(
            "message",
            !isOwn && "incoming-message",
            isTyping && "typing-message",
            audio && "audio-message",
        )}>
            <div className="message__container">
                <div className="message__avatar">
                    <Avatar user={user}/>
                </div>
                <div className="message__content">
                    {audio ? (
                        <Audio audioSrc={audio} />
                    ) : (
                            <React.Fragment>
                                {(text || isTyping) && (
                        <div className="message__text">
                            <div>
                                {text}
                                <div className="message__text_typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    {attachments && (
                        <ul className="message__attachment attachment-list">
                            {attachments.map((item, index) => (
                                <li className="attachment-list__item" key={index}>
                                    <img src={item.url} alt={item.filename} />
                                </li>
                            ))}
                        </ul>
                    )}
                            </React.Fragment>
                        )}
                </div>
            {!isOwn && (
                <div className="message__check">
                    {!isTyping && <Check isReaded={isReaded} />}
                </div>
            )}
            {(created_at && !isTyping) && (
                <div className="message__date">
                    <Time date={created_at} />
                </div>
            )}
        </div>
        </div >
    )
};

// Message.propTypes = {
//     avatar: PropTypes.string,
//     text: PropTypes.string,
//     date: PropTypes.string,
//     attachments: PropTypes.array,
//     audio: PropTypes.string,
//     isOwn: PropTypes.bool.isRequired,
//     isReaded: PropTypes.bool,
//     isTyping: PropTypes.bool,
// };

const convertCurrentTime = number => {
    const mins = Math.floor(number / 60);
    const secs = (number % 60).toFixed();
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

const Audio = ({ audioSrc }) => {

    const audioElem = React.useRef();
    const [isPlaying, setIsPlaying] = React.useState(false);
    const toggleIsPlaying = () => setIsPlaying(!isPlaying);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);

    React.useEffect(() => {
        if(isPlaying){
            audioElem.current.play();
        }else{
            audioElem.current.pause();
        };
        audioElem.current.addEventListener('ended', () => setIsPlaying(false));
        audioElem.current.addEventListener("timeupdate", () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
          });
    });

    return (
        <div className="message__audio audio">
            <audio
                className="visually-hidden"
                ref={audioElem}
                src={audioSrc}
                preload="true"
            />
            <div className="audio__progress" style={{ width: progress + "%" }}/>
            <div className="audio__info">
                <div className="audio__btn">
                    <button onClick={toggleIsPlaying}>
                        <img src={isPlaying ? pauseBtn : playBtn} alt="pause.svg" />
                    </button>
                </div>
                <div className="audio__wave">
                    <img src={wave} alt="wave.svg" />
                </div>
                <div className="audio__duration">{convertCurrentTime(currentTime)}</div>
            </div>
        </div>
    )
};

export default Message;