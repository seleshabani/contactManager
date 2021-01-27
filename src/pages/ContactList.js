import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetContactsList } from "../actions/contactActions";
import _ from "lodash";
import {Link} from "react-router-dom";
import { Button, Card, CardContent, Container, Grid, makeStyles } from "@material-ui/core";
import { GridRow } from "semantic-ui-react";

const useStyle = makeStyles((theme)=>({
    grid:{
        display:'flex',
    },
    GridRow:{
        marginTop:'10px',
        width:'60%',
        margin:'auto'
    },
    p:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Button:{
        backgroundColor:'rgb(37,71,170)',
        width:'15%',
        color:'white',
        '&:hover':{
            backgroundColor:'rgb(37,71,170)',
            transform:'scale(0.99)',
            transition:'all ease 300ms'
        }
    },
    link:{
        textDecoration:'none',
    }
}))


const ContactsList = (props)=>{
    const dispatch = useDispatch();
    const ContactsList = useSelector(state=>state.ContactsList);
    const classes = useStyle();
    useEffect(()=>{
        FetchData(1)
    },[]);

    const FetchData = (page=1)=>{
        dispatch(GetContactsList(page))
    }

    
    const ShowData = ()=>{
        if(!_.isEmpty(ContactsList.data)){

            return ContactsList.data.map(el=>{
            return(

                <GridRow className={classes.GridRow} key={el.id}>
                    <Card>
                        <CardContent>
                            <p className={classes.p}> 
                                <span>{el.nom}</span>
                                <Link className={classes.link} to={`/contacts/${el.id}`}>
                                    <Button className={classes.Button}>
                                        voir
                                    </Button>
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </GridRow>
            )
            })
        }
        if (ContactsList.loading) {
            return <p>chargement...</p>
        }

        if (ContactsList.errorMessage !== "") {
            return <p>{ContactsList.errorMessage}</p>
        }

        return <p>impossible de charger la liste</p>
    }


    return(
        <Container>
            <Grid>
                {ShowData()}
            </Grid>
        </Container>

    )
}
export default ContactsList;