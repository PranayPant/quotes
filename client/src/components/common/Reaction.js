import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Badge} from '@material-ui/core'
import {Emoji} from 'emoji-mart'
import { fetchClicks } from '../../api'
import {useQuery} from 'react-query'
import ProgressBar from "../common/ProgressBar"
import ErrorPage from "../common/ErrorPage"

const useStyles = makeStyles({
    root:{
        "&:hover":{
            transform: "scale(1.3)"
        },
        transform: s => `scale(${s})`,
    }
})

export default function Reaction(props){
    const {emoji} = props
    const maxClicks = 999
    const defaultSize = 30
    const [selected, unselected] = [1.3, 1]
    const [emojiScale, setEmojiScale] = useState(unselected)
    const {status, data, error} = useQuery('clicks', fetchClicks)
    const [clicks, setClicks] = useState(0)
    const classes = useStyles(emojiScale)
    const transform = () => {
        if(emojiScale === unselected){
            setEmojiScale(selected)
            setClicks(parseInt(data.clicks) + 1)
        }
        else{
            setEmojiScale(unselected)
            setClicks(0)
        }
    }

    return(
        <div className={classes.root} onClick={()=>transform()}>
            { status === 'loading' &&
                <ProgressBar />
            }
            { status === 'error' &&
                <ErrorPage msg={error.message}/>

            }
            { status === 'success' &&
                <Badge badgeContent={clicks} color="secondary">
                    <Emoji max={maxClicks} emoji={emoji} set={'twitter'} size={defaultSize} />
                </Badge>
            }
        </div>
    )
}