import React from 'react';
import { withStyles } from 'react-jss';
import { Ripple } from '@evg-b/evg-ui';
import Elevation from '@evg-b/evg-ui/src/utils/Elevation';

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

