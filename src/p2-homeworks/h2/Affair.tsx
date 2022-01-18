import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any +
    deleteAffairCallback: (_id: number) => void // need to fix any +
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const styleByPriority = () => {
        if(props.affair.priority === 'high') {
            return s.style_high
        }
        if(props.affair.priority === 'middle') {
            return s.style_middle
        }
        if(props.affair.priority === 'low') {
            return s.style_low
        }
    }

    let currentStyle = styleByPriority()

    return (
        <div>
            <span className={s.area + ' ' + currentStyle}>{props.affair.name}</span>

            <span> <button onClick={deleteCallback} className={s.buttonGrey + ' ' + s.delete_button}>x</button></span>


        </div>
    )
}

export default Affair
