import React, {useState, useEffect, useRef} from 'react'
import { db, auth } from '../firebase';
import SendMessage from './SendMessage';
import Signout from './Signout';


function Chat(){
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() =>{
        db.collection('messages').orderBy('createdAt').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    // .limit()
    return(
        <div className='body'>
        <div className='head'>
        <Signout />
        </div>
        <div className='msgs'>
        {messages.map(({id, text, photoURL, uid}) => (
            <div>
            <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'received'}`} >
                <img src={photoURL} alt="" />
                <p>{text}</p>
            </div>
            </div>
        ))}
        </div>
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
        </div>
    )
}

export default Chat;