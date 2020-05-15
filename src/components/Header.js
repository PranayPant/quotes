import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {Paper, Typography, Button} from '@material-ui/core'
import {fetchRandom} from '../api'
import {queryCache} from 'react-query'

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

const RandomButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#228B22',
        borderColor: '#006400',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#008000',
          borderColor: '#006400',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#006400',
        },
      },
})(Button)

export default function Header(){
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
                            <div className={classes.randomButtonWrapper} onClick={()=> queryCache.refetchQueries( 'qod')}>
                                <RandomButton variant="contained" color="primary" >
                                    Generate Random Quote!
                                </RandomButton>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </>
    )
}