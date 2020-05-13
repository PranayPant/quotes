import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'
import qod from '../api'
import  Header from './Header'

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
        flexGrow: 1
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
    }
}))

export default function Main() {
    const classes = useStyles()
    const [quote, setQuote] = useState("No quote")
    const [author, setAuthor] = useState("Unknown")
    
    useEffect(()=>{
        qod().then(res=>{
            setQuote(res.quote)
            setAuthor(res.author)
            })
            .catch(msg => console.log(msg))
    })
    return(
        <div className={classes.root}>
            <div><Header /></div>
            <div className={classes.bodyWrapper}>
                <div className={classes.body}>
                    <div className={classes.quoteWrapper}>
                        <div className={classes.quote}>
                            <Paper elevation={3}>
                                {quote}
                            </Paper>
                        </div>
                        <div className={classes.authorWrapper}>
                            <div className={classes.authorName}>
                                <Typography>- {author}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}