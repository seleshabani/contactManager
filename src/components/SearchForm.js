import React from 'react' 
import clsx from 'clsx';
import {Controller, useForm} from 'react-hook-form';
import {useHistory } from 'react-router-dom';
import { AppBar, Container, IconButton, InputBase, makeStyles,fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../actions/themeActions';
import { ChevronLeft } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles((theme)=>({
    menu:{
		height:'50px',
		zIndex: theme.zIndex.drawer + 1
	},
	menuShift:{
		width:'calc(100% - 240px)',
		marginLeft:'240px'
	},
    container:{
        display:'flex',
        flexDirection:'colum',
        justifyContent:'space-between',
        alignItems:'center'
	},
	search:{
	  position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
    icon:{
        width:'10%',
		color:'white',
		marginLeft:'10px'
	},
	input:{
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		color:'white'
	}
}))

const SearchForm = ()=>{
    
    const {handleSubmit,control} = useForm({mode:'onSubmit'});
    const history = useHistory();
	const classes = useStyle();
	const dispatch = useDispatch();
	const themeState = useSelector(dr=>dr.Theme);
    const handleSearch = (data)=>{
        history.push(`/contacts-search/${data.search}`)
    }
	const handleDopen = ()=>{
		dispatch(toggleDrawer())
	}

    return(
        <>
            <AppBar className={clsx({
				[classes.menu]:!themeState.drawerOpen,
				[classes.menuShift]:themeState.drawerOpen
			})} position="sticky">
            <Container className={classes.container}>
					<IconButton className={classes.icon} onClick={handleDopen}>
						{themeState.drawerOpen ? <ChevronLeft/> : <MenuIcon/>}
					</IconButton>
					<form onSubmit={handleSubmit(handleSearch)}>
					<div className={classes.search}>
					<div className={classes.searchIcon}>
					<SearchIcon />
					</div>
					<Controller
						control={control}
						name="search"
						render={(
							{ onChange, onBlur, value, name, ref },
							{ invalid, isTouched, isDirty }
						) => (
							<InputBase
							onBlur={onBlur}
							onChange={(e) => onChange(e.target.value)}
							inputRef={ref}
							className={classes.input}
							/>
						)}
						/>
					</div>
               </form>
            </Container>
            </AppBar>
        </>
    )
}
export default SearchForm;