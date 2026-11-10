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
const IconSize = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            <Icon name="Cancel" size='small' />
            <Icon name="Cancel" size='medium' />
            <Icon name="Cancel" size='large' />
            <Icon name="Cancel" size='extra' />
        </div>
    )
}

export default withStyles(styles)(IconSize)