import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Badge} from '@material-ui/core'
import {Emoji} from 'emoji-mart'

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
    const defaultSize = 30
    const [selected, unselected] = [1.3, 1]
    const [emojiScale, setEmojiScale] = useState(unselected)
    const [clicks, setClicks] = useState(0)
    const classes = useStyles(emojiScale)
    const transform = () => {
        if(emojiScale === unselected){
            setEmojiScale(selected)
            setClicks(clicks + 1)
        }
        else{
            setEmojiScale(unselected)
            setClicks(0)
        }
    }

    return(
        <div className={classes.root} onClick={()=>transform()}>
            <Badge badgeContent={clicks} color="secondary">
                <Emoji emoji={emoji} set={'twitter'} size={defaultSize} />
            </Badge>
        </div>
    )
}