import React from 'react'
import s from './Message.module.css'

export type MessageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.image}>
                <img src={props.avatar} alt={'avatar'}/>
            </div>
            <div className={s.text_field}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message} <span className={s.time}>{props.time}</span></div>

            </div>
        </div>
    )
}

export default Message
