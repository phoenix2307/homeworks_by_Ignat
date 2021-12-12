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
        <div>

        </div>
    )
}

export default Message
