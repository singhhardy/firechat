import React from "react";
import {auth} from '../firebase'
import {Button} from '@material-ui/core'

function Signout(){
    return(
        <div className="signout">
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default Signout;