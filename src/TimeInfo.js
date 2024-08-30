import React, {useContext} from "react";
import {UserContext} from './TimeInfoContext';

const TimeInfo = () =>{
    const Timer = useContext(UserContext);

    return (
        <div>
            {Timer}
        </div>
    )
}

export default TimeInfo;