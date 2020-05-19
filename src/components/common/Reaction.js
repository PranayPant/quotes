import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Emoji} from 'emoji-mart'

const useStyles = makeStyles({
    root:{
        "&:hover":{
            transform: "scale(1.3)"
        },
        transform: s => `scale(${s})`
    }
})

export default function Reaction(props){
    const {emoji} = props
    const defaultSize = 30
    const [selected, unselected] = [1.3, 1]
    const [emojiScale, setEmojiScale] = useState(unselected)
    const classes = useStyles(emojiScale)
    const transform = () => {
        if(emojiScale === unselected){
            setEmojiScale(selected)
        }
        else{
            setEmojiScale(unselected)
        }
    }

    return(
        <div className={classes.root} onClick={()=>transform()}>
            <Emoji emoji={emoji} set={'twitter'} size={defaultSize} />
        </div>
    )
}