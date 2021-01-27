import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../actions/contactActions";
import {Link } from "react-router-dom";
import _ from "lodash";
import { Button, Card, CardContent, Container, Grid, makeStyles } from "@material-ui/core";
import { GridRow } from "semantic-ui-react";

const useStyle = makeStyles(()=>({
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
        width:'15%'
    },
    link:{
        color:'white',
    }
}))

const Recherche = (props)=>{
    const searchItem = props.match.params.item;
    const dispatch = useDispatch();
    const SearchState = useSelector(state=>state.Recherche);
    const classes = useStyle();
    
    useEffect(()=>{
        fetchData(searchItem);
    },[searchItem])

    const fetchData = (item)=>{
        dispatch(searchContact(item));
    }

    const showData = ()=>{
        if (SearchState.errorMessage !== "") {
            return <p>{SearchState.errorMessage}</p>
        }

        if(!_.isEmpty(SearchState.data)){
            return SearchState.data.map(el=>{
                return(
                    <GridRow className={classes.GridRow} key={el.id}>
                    <Card>
                        <CardContent>
                            <p className={classes.p}> 
                                <span>{el.nom}</span>
                                <Button className={classes.Button}>
                                    <Link className={classes.link} to={`/contacts/${el.id}`}>voir</Link>
                                </Button>
                            </p>
                        </CardContent>
                    </Card>
                </GridRow>
                )
            })
        }else{
            return <p>Aucun résultat</p>
        }
    }
    return (
        <Container>
            {showData()}
        </Container>
    )
}
export default Recherche;