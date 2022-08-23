import React, { useState } from 'react';
import {db, auth} from '../firebase';
import firebase from 'firebase/compat/app';
import { Input, Button} from '@material-ui/core';

function SendMessage({scroll}){
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const { uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <div>
        <form onSubmit={sendMessage}>
            <Input style={{ width: '60%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type a Message...." />
            <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '100px'}} type="submit">Send</Button>
        </form>
        </div>
    )
}

export default SendMessage