import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Drawer, Divider, List, ListItem, ListItemText, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles( theme => ({
    root:{
        padding: theme.spacing(2)
    },
    titleBar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
    },
    iconWrapper:{
        display: 'flex',
        flexDirection: 'flex-start',
        flexGrow: 1,
        fontSize: 50
    },
    headingWrapper:{
        flexGrow: 1
    },
    icon:{
        transform: 'scale(1.5)'
    }
}))

export default function Header(){
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)
    return(
        <>
            <div className={classes.root}>
                <div className={classes.titleBar}>
                    <div className={classes.iconWrapper}>
                        <IconButton className={classes.icon} onClick={()=> setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={classes.headingWrapper}>
                        <Typography variant='h1'>
                            Quotes
                        </Typography>
                    </div>
                </div>
            </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Categories', 'Authors', 'Popular'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}