import React from 'react';
import { withStyles, Icon } from '@evg-b/evg-ui'


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
            <Icon name="Cancel" color='primary' />
            <Icon name="ChevronLeft" color='warn' />
            <Icon name="Close" color='fail' />
            <Icon name="Check" color='success' />
        </div>
    )
}

export default withStyles(styles)(IconColor)