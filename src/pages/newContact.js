import { Card, Container, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import Form from '../components/form';

const useStyle = makeStyles(()=>({
  card:{
    width:'70%',
    margin:'auto',
    marginTop:'20px',
    padding:'10px'
  }
}))
const NewContact = ()=>{
    const classes = useStyle();

    return <Container>
            <Card className={classes.card}>
              <Typography variant="h2" gutterBottom>
                Nouveau Contact
              </Typography>
             <Form btnText="Créer"/>
            </Card>
            </Container>
}
export default  NewContact;