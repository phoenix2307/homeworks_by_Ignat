import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any +
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any +
    const [error, setError] = useState<string>('') // need to fix any +


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // debugger
        let validName = e.currentTarget.value.trim()
        if (validName) {
            setName(e.currentTarget.value)
            setError('')
            // лучше обнулять ошибку при условия, что она была: error && setError('')
        } else {
            // name && setName('')
            setError('error')

        }
        console.log()
    }
    const addUser = () => {
        if(name !== '') {
            addUserCallback(name)
            alert(`Hello  ! ${name}`) // need to fix +
            setName('')
        }

    }

    const totalUsers = users.length // need to fix +


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
