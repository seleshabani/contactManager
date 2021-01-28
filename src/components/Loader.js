import React from 'react'
import Loadersvg from './LoaderSvg';
import { makeStyles,Container } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    main:{
        width:'40%',
        margin:'auto',
        marginTop:'20px'
    }
}))

const Loader = ()=>{
    const classes = useStyle();
    return <Container className={classes.main}>
        <Loadersvg/>
    </Container>
}
export default Loader;