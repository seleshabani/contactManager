import React from "react";
import {Controller} from 'react-hook-form';
import { FormControl, TextField } from "@material-ui/core";



const ControllerInput = ({name,defValue,control,pattern=null})=>{
    return(
        <FormControl>
        <Controller
            control={control}
            name={name}
            defaultValue={defValue}
            render={(
                {ref,value,onChange},
            ) => (
                <TextField
                inputRef={ref}
                fullWidth
                size='small'
                variant="outlined"
                label={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                />
            )}
            rules={{required:true}}
            />
        </FormControl>
    )
}
export default ControllerInput;