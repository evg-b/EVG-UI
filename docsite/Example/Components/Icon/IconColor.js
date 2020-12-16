import React from 'react';
import { withStyles } from 'react-jss';
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
            <ChevronLeft color='warn' />
            <Close color='fail' />
            <Check color='success' />
            <Cancel color='primary' />
            <Visibility color='--ifm-color-primary' />
        </div>
    )
}

export default withStyles(styles)(IconColor)