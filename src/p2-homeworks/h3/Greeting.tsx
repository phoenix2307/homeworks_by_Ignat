import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any +
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any +
    error: string // need to fix any +
    totalUsers: number // need to fix any +
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === 'error' ? s.errorStyle : s.superInput// need to fix with (?:) +
    const errorClass = error === 'error' ? s.errorStyle : s.superInput
    const activeButton =  error === 'error'

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>

            <button onClick={addUser}
                    disabled={activeButton}
            className={s.buttonGrey}>add</button>

            <span>{totalUsers}</span>
            <div>
                <span className={s.errorClass}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
