import React from 'react';
import { Elevation, Ripple, withStyles } from '@evg-b/evg-ui';

const styles = {
    base: {
        ...Elevation(2),
        width: '300px',
        height: '300px',
        position: 'relative',
    },
}

const RippleBase = (props) => {
    const {
        classes,
    } = props

    return (
        <div className={classes.base}>
            <Ripple />
        </div>
    )
}

export default withStyles(styles)(RippleBase)

