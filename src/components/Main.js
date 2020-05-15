/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'
import {fetchQOD, fetchRandom} from '../api'
import { useQuery } from 'react-query'
import  Header from './Header'
import ProgressBar from './common/ProgressBar'
import ErrorPage from "./common/ErrorPage"

const useStyles = makeStyles( theme => ({
    root:{
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',

    },
    bodyWrapper:{
        display: "flex",
        flexGrow: 1
    },
    body:{
        display: 'flex',
        justifyContent:"center",
        flexDirection: "row",
        flexGrow: 1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    quoteWrapper:{
        display: 'flex',
        justifyContent:"center",
        flexDirection: "column",
    },
    quote:{
        padding: theme.spacing(2),
        fontSize: 22
    },
    authorWrapper:{
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    authorName: {
        fontStyle: 'italic'
    },
}))

const getBackgroundStyle = img => {
    if(img){
        return {
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }
}

export default function Main() {
    let {status, data, error} = useQuery('qod', fetchRandom, {staleTime: Infinity});
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div><Header update={ newInfo => ({status, data, error} = newInfo) }/></div>
            <div className={classes.bodyWrapper} >
                { status === 'loading' && 
                    <ProgressBar />
                }
                { status === 'error' &&
                    <ErrorPage msg={error.message}/>
                }
                { status === 'success' &&
                    <div id="content" className={classes.body} style={getBackgroundStyle(data.img)}>
                        <div className={classes.quoteWrapper}>
                            <div className={classes.quote}>
                                <Paper elevation={3}>
                                    {data.quote}
                                </Paper>
                            </div>
                            <div className={classes.authorWrapper}>
                                <div className={classes.authorName}>
                                    <Paper elevation={3}>
                                        <Typography>- {data.author}</Typography>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}