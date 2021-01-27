import React from "react";
import {Controller} from 'react-hook-form';
import { Input } from "@material-ui/core";



const ControllerInput = ({name,placeholder,control,pattern=null})=>{
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
                fullWidth
                />
            )}
            
            />
    )
}
export default ControllerInput;