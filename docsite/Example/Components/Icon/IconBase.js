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
const IconBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Icon name="ChevronLeft" />
            <Icon name="Close" />
            <Icon name="Check" />
            <Icon name="Cancel" />
            <Icon name="Fullscreen" />
            <Icon name="Menu" />
            <Icon name="MoreVert" />
            <Icon name="ExpandMore" />
            <Icon name="ArrowUpward" />
        </div>
    )
}

export default withStyles(styles)(IconBase)