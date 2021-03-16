import React from 'react';
import { withStyles } from '@evg-b/evg-ui';
import {
    ChevronLeft,
    Check,
    Close,
    Cancel,
    Visibility,
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
const IconColor = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Cancel color='primary' />
            <ChevronLeft color='warn' />
            <Close color='fail' />
            <Check color='success' />
        </div>
    )
}

export default withStyles(styles)(IconColor)