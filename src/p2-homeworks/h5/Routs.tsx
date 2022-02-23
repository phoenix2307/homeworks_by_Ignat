import React from 'react'
import {Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";


export const PATH = {
    START_PAGE: '',
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    NOT_FOUND: '*'
}

function Routs() {
    return (
        <div>
            <Routes>

                <Route path={PATH.START_PAGE} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.NOT_FOUND} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Routs
