import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div>404</div>
            <div>Page not found!</div>
            <div className={s.block}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpppGLQ4raRPODyEyN1U_ZEpiaO-d9NSeOKBkxpNOwQ2AW_JsfE40dKFaxKvK7c-qej8&usqp=CAU" alt="samurai"/>
                <div>У самурая нет цели... У самурая есть только путь</div>
            </div>

        </div>
    )
}

export default Error404
