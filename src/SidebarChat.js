import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function SidebarChat(props) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if(props.id){
            db.collection('rooms').doc(props.id).collection('messages')
            .orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc)=>
                    doc.data()
                ))
            ))
        }
    }, [props.id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 7000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return props.name ? (
        <Link to={`/rooms/${props.id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{props.name}</h2>
                    <p>{ messages[0]?.message }</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
