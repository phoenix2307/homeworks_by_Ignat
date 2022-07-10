import React from 'react'
import Message, {MessageDataPropsType} from "./Message";

const messageData: MessageDataPropsType = {
    // avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    avatar: 'https://w7.pngwing.com/pngs/394/149/png-transparent-youtube-disc-jockey-avatar-pool-live-tour-lunar-republic-the-plight-of-cloudsdale-avatar-steam-television-mammal-vertebrate.png',
    name: 'Katya',
    message: 'Добро пожаловать в инкубатор))',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <h4>Homeworks 1</h4>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
