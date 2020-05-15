import React from 'react'
import {Box} from '@material-ui/core'

export default function ErrorPage(props){
    return(
        <Box>
            Error: {props.msg}
        </Box>
    )
}