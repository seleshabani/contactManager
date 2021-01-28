import { Container, makeStyles, Paper,IconButton, Collapse} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeFlash } from '../actions/themeActions';

const useStyle = makeStyles(()=>({
    paper:{
        width:'250px',
        height:'50px',
        position:'absolute',
        right:'10px',
        bottom:'10px',
        backgroundColor:'green',
        color:'white'
    },
    paper2:{
        display:'none'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    IconButton:{
        marginTop:'0px',
        width:'10%'
    }
}))

const FlashMessage = ()=>{
    const classes = useStyle();
    const themeState = useSelector(dr=>dr.Theme);
    const [visible,setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(closeFlash());
    }
    useEffect(()=>{
        if(themeState.FlashMessage !== ''){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[themeState.FlashMessage])

    return <Collapse in timeout={300}>
            <Paper className={clsx({
            [classes.paper]:visible,
            [classes.paper2]:!visible
        })}>
            <Container className={classes.container}>
                <p>{themeState.FlashMessage}</p>
                <IconButton className={classes.IconButton} onClick={handleClick}>
                <Close/>
                </IconButton>
            </Container>
        </Paper>
    </Collapse>
    
    
}

export default FlashMessage;