import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    root:{
        padding: theme.spacing(2)
    },
    titleBar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        padding: theme.spacing(2),
        backgroundColor: "#fbf8f1"
    },
    iconWrapper:{
        display: 'flex',
        flexDirection: 'flex-start',
        flexGrow: 1,
        fontSize: 50
    },
    headingWrapper:{
        flexGrow: 0,
        padding: theme.spacing(2)
    },
    menuWrapper:{
        flexGrow: 1
    },
    randomButtonWrapper:{
        padding: theme.spacing(3)
    }
}))

export default function Header({children}){
    const classes = useStyles()
    return(
        <>
            <div className={classes.root}>
                <Paper elevation={3}>
                    <div className={classes.titleBar}>
                        <div className={classes.headingWrapper}>
                            <Typography variant='h3'>
                                Quotes
                            </Typography>
                        </div>
                        <div className={classes.menuWrapper}>
                            <div className={classes.randomButtonWrapper} >
                                {children}
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </>
    )
}