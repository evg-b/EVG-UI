import React from 'react';
import { withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        display: 'flex',
        flexWrap: 'wrap',
        '&>*': {
            margin: '5px'
        }
    }
}
const MenuBase = (props) => {
    const { classes } = props
    return (
        <div className={classes.base}>
            MenuBase
        </div>
    )
}

export default withStyles(styles)(MenuBase)