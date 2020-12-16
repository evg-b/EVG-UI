import React from 'react';
import { withStyles } from 'react-jss';
import { Cancel } from '@evg-b/evg-icons';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const IconSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Cancel size='small' />
            <Cancel size='medium' />
            <Cancel size='large' />
            <Cancel size='extra' />
        </div>
    )
}

export default withStyles(styles)(IconSize)