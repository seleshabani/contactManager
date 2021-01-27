import React from 'react'; 
import {useSelector} from 'react-redux';
import clsx from 'clsx';
import { Link, } from 'react-router-dom';
import { Drawer, Icon, List, ListItem, makeStyles } from '@material-ui/core';
import { Person, PersonAdd } from '@material-ui/icons';

const useStyle = makeStyles((theme)=>({
	listlink:{
		display:'flex',
		flexDirection:'row',
		alignContent:'baseline',
		alignItems:'center',
		justifyContent:'space-between',
		color:'black',
		fontWeight:'bold',
		textDecoration:'none',
	},
	drawerOpen: {
        width: '240px',
        display:'block',
		transition: 'all ease-in 300ms',
	  },
	  drawerClose: {
		transition: 'all ease-in 300ms',
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
		  width: theme.spacing(9) + 1,
        },
        display:'none'
	  }
}))


const MenuBar = ()=>{
	const classes = useStyle();
	const themeState = useSelector(dr=>dr.Theme);

    return <Drawer variant="permanent" anchor="left"
            open={themeState.drawerOpen}
            className={clsx({
            [classes.drawerOpen]:themeState.drawerOpen,
            [classes.drawerClose]: !themeState.drawerOpen,
			})}
			classes={{
				paper: clsx({
				  [classes.drawerOpen]:themeState.drawerOpen,
				  [classes.drawerClose]: !themeState.drawerOpen,
				}),
			  }}
            >
       <List>
           <ListItem>
               <Link to='/contacts' className={classes.listlink}>
                   <Icon><Person/></Icon>
                   <span>Contacts</span>
               </Link>
           </ListItem>
           <ListItem>
               <Link to='/contacts-create' className={classes.listlink}>
                   <Icon><PersonAdd/></Icon>
                   <span>Nouveau</span>
               </Link>
           </ListItem>
       </List>
   </Drawer>
}
export default MenuBar;