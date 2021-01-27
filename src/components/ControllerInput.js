import React from "react";
import {Controller} from 'react-hook-form';
import { Input } from "@material-ui/core";



const ControllerInput = ({name,placeholder,control})=>{
    return(
        <Controller
            control={control}
            name={name}
            render={(
                {ref },
            ) => (
                <Input
                inputRef={ref}
                placeholder={placeholder}
                />
            )}
            />
    )
}
export default ControllerInput;