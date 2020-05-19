/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {Paper, Typography, Button} from '@material-ui/core'
import {fetchQOD, fetchRandom} from '../api'
import { useQuery, queryCache, useMutation } from 'react-query'
import  Header from './Header'
import ProgressBar from './common/ProgressBar'
import ErrorPage from "./common/ErrorPage"
import Reaction from "./common/Reaction"

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
    infoWrapper:{
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    authorName: {
        fontStyle: 'italic',
        order: '2',
        padding: theme.spacing(2)
    },
    emojiWrapper: {
        order: '1',
        padding: theme.spacing(2),
        display: 'flex'
    },
    reaction:{
        marginRight: theme.spacing(1),
    }
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

export default function Main() {
    const classes = useStyles();
    const queryKey = 'qod'
    const {status, data, error} = useQuery(queryKey, fetchQOD, {staleTime: Infinity});
    const [mutateQuote] = useMutation( fetchRandom, {
        onSuccess: data => queryCache.setQueryData(queryKey, data),
    } )
    return(
        <div className={classes.root}>
            <Header>
                <div onClick={mutateQuote}>
                    <RandomButton variant="contained" color="primary" >
                        Generate Random Quote!
                    </RandomButton>
                </div>
            </Header>
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
                            <div className={classes.infoWrapper}>
                                <div className={classes.authorName}>
                                    <Paper elevation={3}>
                                        <Typography>- {data.author}</Typography>
                                    </Paper>
                                </div>
                                <div className={classes.emojiWrapper}>
                                    {
                                        ['heart_eyes', 'grinning', 'joy', 'thinking_face', 'expressionless'].map( (reaction, key) => {
                                            return (
                                                <div key={key} className={classes.reaction} >
                                                    <Reaction emoji={reaction} />
                                                </div>
                                            )
                                        })
                                    }      
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}