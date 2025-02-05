import {Context} from "./AppContextProvider";
import {useContext} from "react";

export default function (){
    let {setShow} = useContext(Context)
    return(
        <button type="button" onClick={() => setShow(true)}>close modal</button>
    )
}