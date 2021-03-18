import React, { useContext, useEffect, useRef, useState } from 'react';
import socketIOClient from "socket.io-client"
import { withRouter } from 'react-router-dom'
import Axois from 'axios';
import { UserContext } from '../Context/User.context';

function ChatBtn(){
    const{ userInfo} =useContext(UserContext)
    const socket = socketIOClient('http://localhost:3001')
    return(
        <div></div>
    )
}
export default withRouter(ChatBtn);