import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import Routs from './Routs'

function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>
                <Routs/>

            </HashRouter>
        </div>
    )
}

export default HW5
