import React from 'react';
import { withStyles } from 'react-jss';
import {
    ChevronLeft,
    Check,
    Close,
    Cancel,
    Menu,
    Fullscreen,
    MoreVert,
    ExpandMore,
    ArrowUpward,
} from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const IconBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <ChevronLeft />
            <Close />
            <Check />
            <Cancel />
            <Fullscreen />
            <Menu />
            <MoreVert />
            <ExpandMore />
            <ArrowUpward />
        </div>
    )
}

export default withStyles(styles)(IconBase)